%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 2 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 3/17/2024

%% Problem 1: Deconvolution in defocus imaging

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

% c) Tikhonov deconvolution
TD = @(G,H,mu) Ft(conj(H).*G./(abs(H).^2+mu));

%% define operators to compute various errors
% note that all the errors can be conviniently computed in the Fourier space
% according to the Parseval's theorem (lecture 6, slide 19)

%% load data
load I1;
load psf1;
load psf2;

%% setup spatial coordinate in x
dx = 1e-3; % in mm
N = size(I1,1);
x = [-N/2:N/2-1]*dx;

% the correponding spatial frequency coordinates
du = 1/N/dx;
u = [-N/2:N/2-1]*du;


%% output image of object
% compute Fourier function of I1
F1 = F(I1);

% compute transfer function of psf1
H1 = F(psf1);
% compute transfer function of psf2
H2 = F(psf2);

% output image
g1 = Ft(F1.*H1);
figure(1); 
imagesc(I1); axis image; axis off; colormap gray;
title('object 1'); 
figure(2); 
imagesc(g1); axis image; axis off; colormap gray;
title('object 1 under defocus z1 = 0.1mm');

%% condition number 
% condition number for shift-invariant system is defined by the ratio 
% between the maxium transfer function value and the minimum!
%% the condition number of h1 is: 
cond1 = max(abs(H1(abs(H1)>0)))/min(abs(H1(abs(H1)>0)));

fprintf('the condition number of h1 is %1.2e\n',cond1);
%% comparisons of different deconvolution techniques
% take Fourier transform of the image
G1 = F(g1);

%% direct deconvolution
f1_dd = DD(G1,H1);

figure(3); 
imagesc(f1_dd); axis image; axis off; colormap gray;
title('direct deconvolution of object 1, noiseless');

%fprintf('observe the numerical instability from direct deconvolution');

%% generalized solution
f1_gs = GS(G1,H1);
figure; imagesc(f1_gs); axis image; axis off; colormap gray;
title('generalized solution of object 1, noiseless');

% generalized solution fixes the numerical instability 

%% Tikhonov deconvolution
m = 1;
for mu = logspace(-31,2,6)
    f1_td = TD(G1,H1,mu);
   
    figure;
    imagesc(f1_td); axis image; axis off; colormap gray;
    title(['Tik deconv, noiseless, \mu=',num2str(mu)]);
    m = m+1;
end

% Observation: \mu near zero (1e-31) produces the best deconvolution results 
% when no noise is present. As mu increases the approximation error 
% increases and the solution becomes more blurry


%% Problem 1A4) noisy deconvolution, white Gaussian noise (WGN)

% noise level of WGN
n_std = [1,10];
for m = 1:length(n_std)
    % generate noisy image under WGN
    %g1_noisy = normrnd(g1, n_std(m), N, N);
    g1_noisy = g1 + n_std(m) * randn(N, N);
    figure; imagesc(g1_noisy); axis image; axis off; colormap gray;
    title(['noisy image 1, n_{std}=',num2str(n_std(m))]);
    
    % take Fourier transform of the image
    G1_noisy = F(g1_noisy);
    
    %% direct deconvolution
    f1_noisy_dd = DD(G1_noisy,H1);
    
    figure; imagesc(f1_noisy_dd); axis image; axis off; colormap gray;
    title(['direct deconvolution of noisy image 1, n_{std}=',num2str(n_std(m))]);
    
    % observation: severe noise amplitifcation 
    
    %% generalized solution
    f1_noisy_gs = GS(G1_noisy,H1);
    figure; imagesc(f1_noisy_gs); axis image; axis off; colormap gray;
    title(['generalized solution of noisy image 1, n_{std}=',num2str(n_std(m))]);
    
    % observation: severe noise amplitifcation
    %% Tikhonov deconvolution
    mu = logspace(-4,4,9);
    for n = 1:length(mu)
        f1_noisy_td = TD(G1_noisy,H1,mu(n));
        
        figure;
        imagesc(f1_noisy_td); axis image; axis off; colormap gray;
        title(['Tik deconv, n_{std}=',num2str(n_std(m)), ', \mu=',num2str(mu(n))]);

    end
    
    % observation: the optimal mu is around 0.1, where the total error
    % reaches the minimum. 
    % The approximation error monotonically increases
    % as mu increases, whereas the noise-propagation error monotonically
    % decreases as mu increases.
    
    % Also notice that the solution from the optimal mu may not be the
    % most visually appealing one. As shown in this example. The reason is
    % beacause at the optimal value, the background may still contain noise
    % artifacts.  High mu value will further suppress these artifacts, at
    % the cost of increasing approximation error.  This is a fundamental
    % limitation of Tikhonov regularization that can only be resolved using
    % non-l2 based regularization methods, e.g. TV, l1-regularization
    
end