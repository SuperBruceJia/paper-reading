%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 5 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Shuyue Jia (brucejia@bu.edu), 3/31/2024

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

%% output images of objects for two measurements
g1 = F1.*H1;

% output image for the second measurement
g2 = F1.*H2;

% Compute the LS solution using the stacked linear models
LS_solution = Ft((conj(H1) .* g1 + conj(H2) .* g2) ./ (abs(H1).^2 + abs(H2).^2));

% output image for the first measurement
g1 = Ft(F1.*H1);

% output image for the second measurement
g2 = Ft(F1.*H2);

% Display the original image and recovered images
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.42, 0.5]);

subplot(2, 2, 1);
imagesc(I1); axis image; axis off; colormap gray;
title('The original object', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold'); 

subplot(2, 2, 2);
imagesc(g1); axis image; axis off; colormap gray;
title('The object under measurement 1', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(2, 2, 3);
imagesc(g2); axis image; axis off; colormap gray;
title('The object under measurement 2', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(2, 2, 4);
imagesc(abs(LS_solution)); axis image; axis off; colormap gray;
title('The object under both measurements', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Save the figure with reduced margin
saveas(gcf, 'problem_4_1.png');
