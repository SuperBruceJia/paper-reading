% Load data
f = load('I1.mat').I1;  % Original object
h1 = load('psf1.mat').psf1;  % PSF for z1 = 0.1mm
h2 = load('psf2.mat').psf2;  % PSF for z2 = -0.2mm

% Compute Fourier transforms
H1_fft = fft2(h1, size(f, 1), size(f, 2));  % Fourier transform of PSF h1
H2_fft = fft2(h2, size(f, 1), size(f, 2));  % Fourier transform of PSF h2
F_fft = fft2(f);  % Fourier transform of object f

% Compute the convolved Fourier transforms
G1_fft = F_fft .* H1_fft;  % Convolution in the Fourier domain for h1
G2_fft = F_fft .* H2_fft;  % Convolution in the Fourier domain for h2

% Compute the condition numbers
cond_num_h1 = max(abs(H1_fft(:))) / min(abs(H1_fft(H1_fft ~= 0)));  % Condition number for PSF h1
cond_num_h2 = max(abs(H2_fft(:))) / min(abs(H2_fft(H2_fft ~= 0)));  % Condition number for PSF h2

% Define Tikhonov deconvolution function
tikhonov_deconv = @(G_fft, H_fft, lambda) ifft2((conj(H_fft) .* G_fft) ./ (abs(H_fft).^2 + lambda));

% Regularization parameter
lambda = 0.001;

% Perform Tikhonov deconvolution
f_rec1_tikhonov = tikhonov_deconv(G1_fft, H1_fft, lambda);  % Recovered image 1 using Tikhonov deconvolution
f_rec2_tikhonov = tikhonov_deconv(G2_fft, H2_fft, lambda);  % Recovered image 2 using Tikhonov deconvolution

% Display results
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);

% Display the original image and recovered images
subplot(1, 3, 1); 
imshow(f, []); 
title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 2); 
imshow(abs(f_rec1_tikhonov), []); 
title('Deblurred Image for z1', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3); 
imshow(abs(f_rec2_tikhonov), []); 
title('Deblurred Image for z2', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Save the figure with reduced margin
saveas(gcf, 'problem_3_2.png');

% Calculate PSNR between deblurred_image1 and original f
psnr_deblurred_image1 = psnr(uint8(abs(f_rec1_tikhonov)), uint8(f));

% Calculate PSNR between deblurred_image2 and original f
psnr_deblurred_image2 = psnr(uint8(abs(f_rec2_tikhonov)), uint8(f));

% Display PSNR values
fprintf('PSNR between the deblurred image 1 (regarding h1 and z1) and the original f: %.2f dB\n', psnr_deblurred_image1);
fprintf('PSNR between the deblurred image 2 (regarding h2 and z2) and the original f: %.2f dB\n', psnr_deblurred_image2);
