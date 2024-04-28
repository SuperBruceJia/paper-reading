% Load the provided data
load ('o1.mat', 'o1'); % Load object at depth 1
load ('o2.mat', 'o2'); % Load object at depth 2
load ('psf1.mat', 'psf1'); % Load PSF at depth 1
load ('psf2.mat', 'psf2'); % Load PSF at depth 2

% Simulate the output image
g = conv2(o1, psf1, 'same') + conv2(o2, psf2, 'same');

% Display the simulated output image
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 1.0]);
imshow (g, []);
title('Simulated Output Image g', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
