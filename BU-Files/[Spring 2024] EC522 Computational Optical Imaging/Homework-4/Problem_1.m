% Extract data from loaded files
f = load('I1.mat').I1;  % Object f
h1 = load('psf1.mat').psf1;  % PSF h1 for z1 = 0.1 mm
h2 = load('psf2.mat').psf2;  % PSF h2 for z2 = -0.2 mm

% Simulate output images without noise
g1 = conv2(f, h1, 'same');  % Output image for z1 = 0.1 mm
g2 = conv2(f, h2, 'same');  % Output image for z2 = -0.2 mm

% Display results
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);

subplot(1, 3, 1);
imshow(f, []);
title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 2);
imshow(g1, []);
title('Output Image for z1', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3);
imshow(g2, []);
title('Output Image for z2', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Save the figure with reduced margin
saveas(gcf, 'problem_1.png');

% Calculate PSNR between deblurred_image1 and original f
psnr_deblurred_image1 = psnr(uint8(g1), uint8(y));

% Calculate PSNR between deblurred_image2 and original f
psnr_deblurred_image2 = psnr(uint8(g2), uint8(y));

% Display PSNR values
fprintf('PSNR between the blurred image1 and original f: %.2f dB\n', psnr_deblurred_image1);
fprintf('PSNR between the blurred image2 and original f: %.2f dB\n', psnr_deblurred_image2);
