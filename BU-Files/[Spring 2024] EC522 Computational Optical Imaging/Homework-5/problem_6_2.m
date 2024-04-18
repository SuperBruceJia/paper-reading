clear all
clc

%% define Fourier transform operator
% notice the proper use of fftshift & ifftshift
F = @(x) fftshift(fft2(ifftshift(x)));
Ft = @(x) fftshift(ifft2(ifftshift(x)));

%% Problem 1A Simulate the output images, assuming no noise is present.
%% define operators that implement the inversion algorithms 

% a) direct deconvolution
DD = @(G,H) Ft(G./H);

% b) min-norm / generalized solution
% note that to implement generalized solution, we need to prefilter the
% image by H*, then the deconvolution is only for H that has non-zero
% values, in practice, this can be implemented as follows:
GS = @(G,H) Ft(conj(H).*G./(abs(H).^2+1e-31));
% the small value eps ensures numerical stability, it is also a nice trick
% to compute the min-norm solution.

%% load data
load I1;
load psf1;
load psf2;

% c) Tikhonov deconvolution
TD = @(G,H,mu) Ft(conj(H).*G./(abs(H).^2+mu));

% noise level of WGN
for m = 1:10
    
    for value = [0.1, 0.001, 0.0001, 0.00001, 0.000001, 0.0000001]

        %% setup spatial coordinate in x
        dx = 1e-3; % in mm
        N = size(I1,1);
        x = [-N/2:N/2-1]*dx;
        
        % the correponding spatial frequency coordinates
        du = 1/N/dx;
        u = [-N/2:N/2-1]*du;
        
        %% output image of object
        % compute Fourier function of I1
        I1_noise = normrnd(I1, m, size(I1));
        % I1_noise = I1 + n_std(m) * randn(N, N);
        F1 = F(I1_noise);
        
        % compute transfer function of psf1
        H1 = F(psf1);
        
        % compute transfer function of psf2
        H2 = F(psf2);
        
        %% output images of objects for two measurements
        g1 = F1.*H1;
        
        % output image for the second measurement
        g2 = F1.*H2;
        
        % Compute the LS solution using the stacked linear models
        LS_solution = Ft((conj(H1) .* g1 + conj(H2) .* g2) ./ (abs(H1).^2 + abs(H2).^2 + value));
        
        % output image for the first measurement
        g1 = Ft(F1.*H1);
        
        % output image for the second measurement
        g2 = Ft(F1.*H2);
    
        % Calculate PSNR between deblurred_image2 and original f
        psnr_value = psnr(uint8(abs(LS_solution)), uint8(I1_noise));
    
        % Display PSNR values
        fprintf('PSNR between the deblurred image and noisy image: %.2f dB\n', psnr_value);
    end
    fprintf('\n\n');
end
