% Load the provided data
load ('o1.mat', 'o1'); % Load object at depth 1
load ('o2.mat', 'o2'); % Load object at depth 2
load ('psf1.mat', 'psf1'); % Load PSF at depth 1
load ('psf2.mat', 'psf2'); % Load PSF at depth 2

% Simulate the output image
g = conv2(o1, psf1, 'same') + conv2(o2, psf2, 'same');

% Display the simulated output image
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);
subplot(1, 3, 1); 
imshow (g, []);
title('Simulated Output Image g', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Set regularization parameters
mu1 = 0.999999;
mu2 = 0.001;

% Compute 2D FFT of PSFs
psf1 = fft2(psf1, size(g, 1), size(g, 2));
psf2 = fft2(psf2, size(g, 1), size(g, 2));

% Compute 2D FFT of the simulated output image
G = fft2(g);

% Compute reconstructed objects at each depth using regularization
o1_mu1 = conj(psf1) ./ (abs(psf1).^2 + mu1) .* G;
o2_mu2 = conj(psf2) ./ (abs(psf2).^2 + mu2) .* G;

% Inverse FFT to obtain reconstructed objects
o1_reconstructed = ifft2(o1_mu1);
o2_reconstructed = ifft2(o2_mu2);

% Display reconstructed objects
subplot(1, 3, 2); 
imshow(abs(o1_reconstructed), []);
title('Reconstructed Object at Depth 1', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3); 
imshow(abs(o2_reconstructed), []);
title('Reconstructed Object at Depth 2', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
