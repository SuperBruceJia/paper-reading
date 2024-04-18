%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 5 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 3/28/2024

%% define Fourier transform operator
% notice the proper use of fftshift & ifftshift
F = @(x) fftshift(fft2(ifftshift(x)));
Ft = @(x) fftshift(ifft2(ifftshift(x)));

%% define operators that implement the inversion algorithms 

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

% compute transfer function of psf1
H1 = F(psf1);
% compute transfer function of psf2
H2 = F(psf2);


%% problem: Deblurring from multiple defocused measurements

%% define operators that implement the inversion algorithms 
% see detailed derivation in the solution
% Least Square solution
GS_lsv = @(g1,g2,H1,H2) ...
    Ft((conj(H1).*F(g1)+conj(H2).*F(g2))./(abs(H1).^2+abs(H2).^2));

% Tikhonov deconvolution
TD_lsv = @(g1,g2,H1,H2,mu) ...
    Ft((conj(H1).*F(g1)+conj(H2).*F(g2))./(abs(H1).^2+abs(H2).^2+mu));

%% Deconvolution with WGN
% construct noisyfree measurement
g1 = Ft(F(I1).*H1);
g2 = Ft(F(I1).*H2);

n_std = [1,10];
for m = 1:length(n_std)
    % generate noisy image under WGN
    g1_noisy = g1 + n_std(m) * randn(N, N);
    g2_noisy = g1 + n_std(m) * randn(N, N);
    %g1_noisy = normrnd(g1, n_std(m), N, N);
    %g2_noisy = normrnd(g2, n_std(m), N, N);
    figure; 
    subplot(2,1,1);
    imagesc(g1_noisy); axis image; axis off; colormap gray;
    title(['noisy image 1, n_{std}=',num2str(n_std(m))]);
    subplot(2,1,2);
    imagesc(g2_noisy); axis image; axis off; colormap gray;
    title(['noisy image 2, n_{std}=',num2str(n_std(m))]);

    %% LS solution
    f_lsv_gs = GS_lsv(g1_noisy,g2_noisy,H1,H2);
    figure; imagesc(f_lsv_gs); axis image; axis off; colormap gray;
    title(['LS solution, n_{std}=',num2str(n_std(m))]);
    
    % observation: severe noise amplitifcation
    
 
    %% Tikhonov deconvolution
    mu = logspace(-4,4,9);
    for n = 1:length(mu)
        f_lsv_noisy_td = TD_lsv(g1_noisy,g2_noisy,H1,H2,mu(n));
        
        figure;
        imagesc(f_lsv_noisy_td); axis image; axis off; colormap gray;
        title(['Tik deconv, n_{std}=',num2str(n_std(m)), ', \mu=',num2str(mu(n))]);

    end

    
    % observation: comparing the corresponding best solutions, multiple measurements in general help with improving the reconstruction.
    
end