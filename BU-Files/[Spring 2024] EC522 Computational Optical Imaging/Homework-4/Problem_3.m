% Extract data from loaded files
f = load('I1.mat').I1;  % Object f
h1 = load('psf1.mat').psf1;  % PSF h1 for z1 = 0.1 mm
h2 = load('psf2.mat').psf2;  % PSF h2 for z2 = -0.2 mm

% Simulate output images without noise
g1 = conv2(f, h1, 'same');  % Output image for z1 = 0.1 mm
g2 = conv2(f, h2, 'same');  % Output image for z2 = -0.2 mm

% Display PSNR values
g1_rerange = uint8(255 * mat2gray(g1));
g2_rerange = uint8(255 * mat2gray(g2));

% Convert the original image to the same data type as deblurred_image2
f_uint8 = uint8(f);

% Calculate PSNR between deblurred_image1 and original f
psnr_g1 = psnr(g1_rerange, f_uint8);

% Calculate PSNR between deblurred_image2 and original f
psnr_g2 = psnr(g2_rerange, f_uint8);

fprintf('PSNR between g1 and original f: %.2f dB\n', psnr_g1);
fprintf('PSNR between g2 and original f: %.2f dB\n', psnr_g2);

% Deblurring using minnorm solution
regularization_parameter = 0.9; % Adjust as needed for best results

% Deblur image g1 using PSF h1
deblurred_image1 = deconvwnr(g1, h1, regularization_parameter);
deblurred_image1 = uint8(255 * mat2gray(deblurred_image1));

% Deblur image g2 using PSF h2
deblurred_image2 = deconvwnr(g2, h2, regularization_parameter);
deblurred_image2 = uint8(255 * mat2gray(deblurred_image2));

% Display results
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);

subplot(1, 3, 1);
imshow(f, [0, 255]);
title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 2);
imshow(deblurred_image1, [0, 255]);
title('Deblurred Image for z1', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3);
imshow(deblurred_image2, [0, 255]);
title('Deblurred Image for z2', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Save the figure with reduced margin
saveas(gcf, 'problem_3_1.png');

% Calculate PSNR between deblurred_image1 and original f
psnr_deblurred_image1 = psnr(deblurred_image1, f_uint8);

% Calculate PSNR between deblurred_image2 and original f
psnr_deblurred_image2 = psnr(deblurred_image2, f_uint8);

% Display PSNR values
fprintf('PSNR between deblurred_image1 and original f: %.2f dB\n', psnr_deblurred_image1);
fprintf('PSNR between deblurred_image2 and original f: %.2f dB\n', psnr_deblurred_image2);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Extract data from loaded files
f = load('I1.mat').I1;  % Object f
h1 = load('psf1.mat').psf1;  % PSF h1 for z1 = 0.1 mm
h2 = load('psf2.mat').psf2;  % PSF h2 for z2 = -0.2 mm

% Simulate output images without noise
g1 = conv2(f, h1, 'same');  % Output image for z1 = 0.1 mm
g2 = conv2(f, h2, 'same');  % Output image for z2 = -0.2 mm

% Regularization parameter for Tikhonov deconvolution
lambda = 0.001; % Adjust as needed for best results

% Deblur image g1 using Tikhonov deconvolution
deblurred_image1_tikhonov = deconvreg(g1, h1, lambda);
deblurred_image1_tikhonov = uint8(255 * mat2gray(deblurred_image1_tikhonov));

% Deblur image g2 using Tikhonov deconvolution
deblurred_image2_tikhonov = deconvreg(g2, h2, lambda);
deblurred_image2_tikhonov = uint8(255 * mat2gray(deblurred_image2_tikhonov));

% Display results
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);

subplot(1, 3, 1);
imshow(f, [0, 255]);
title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 2);
imshow(deblurred_image1_tikhonov, [0, 255]);
title('Deblurred Image for z1', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3);
imshow(deblurred_image2_tikhonov, [0, 255]);
title('Deblurred Image for z2', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Save the figure with reduced margin
saveas(gcf, 'problem_3_2.png');

% Calculate PSNR between deblurred_image1 and original f
psnr_deblurred_image1 = psnr(deblurred_image1_tikhonov, f_uint8);

% Calculate PSNR between deblurred_image2 and original f
psnr_deblurred_image2 = psnr(deblurred_image2_tikhonov, f_uint8);

% Display PSNR values
fprintf('PSNR between deblurred_image1 and original f: %.2f dB\n', psnr_deblurred_image1);
fprintf('PSNR between deblurred_image2 and original f: %.2f dB\n', psnr_deblurred_image2);
