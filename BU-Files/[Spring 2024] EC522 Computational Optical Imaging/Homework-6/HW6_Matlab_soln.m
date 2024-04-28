%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 6 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 3/28/2024

%% define Fourier transform operator
% notice the proper use of fftshift & ifftshift
F = @(x) fftshift(fft2(ifftshift(x)));
Ft = @(x) fftshift(ifft2(ifftshift(x)));

%% load data
load o1;
load o2;

load psf1;
load psf2;
psf1 = psf1/sum(psf1(:));
psf2 = psf2/sum(psf2(:));


% compute transfer function of psf1
H1 = F(psf1);
% compute transfer function of psf2
H2 = F(psf2);

%% simulate the measurement
g = Ft(F(o1).*H1) + Ft(F(o2).*H2);
figure;  imagesc(g); axis image; axis off; colormap gray; title(['image']);

%% define operators that implement the inversion algorithms 
% Tikhonov deconvolution
Adj_mu = @(g,H,mu) Ft(conj(H).*F(g)./(abs(H).^2+mu));

% Adj solution
o1_adj = Adj_mu(g,H1,1e-3);
o2_adj = Adj_mu(g,H2,1e-3);
figure; imagesc(o1_adj); axis image; axis off; colormap gray;
title(['O1 estimate']);
figure; imagesc(o2_adj); axis image; axis off; colormap gray;
title(['O2 estimate']);
    
