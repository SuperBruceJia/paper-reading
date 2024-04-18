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

% Compute min-norm solution using pseudoinverse
f_est_g1 = real(ifft2(pinv(H1_fft) .* G1_fft));
f_est_g2 = real(ifft2(pinv(H2_fft) .* G2_fft));

% Display the original image and recovered images
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);

subplot(1, 3, 1); 
imshow(f, []); 
title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 2); 
imshow(f_est_g1, []); 
title('Deblurred Image for z1 = 0.1mm', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3); 
imshow(f_est_g2, []); 
title('Deblurred Image for z2 = -0.2mm', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% % Load data
% f = load('I1.mat').I1;  % Original object
% 
% h1 = load('psf1.mat').psf1;  % PSF for z1 = 0.1mm
% h2 = load('psf2.mat').psf2;  % PSF for z2 = -0.2mm
% 
% % Compute Fourier transforms
% H1_fft = fft2(h1, size(f, 1), size(f, 2));  % Fourier transform of PSF h1
% H2_fft = fft2(h2, size(f, 1), size(f, 2));  % Fourier transform of PSF h2
% F_fft = fft2(f);  % Fourier transform of object f
% 
% % Compute the convolved Fourier transforms
% G1_fft = F_fft .* H1_fft;  % Convolution in the Fourier domain for h1
% G2_fft = F_fft .* H2_fft;  % Convolution in the Fourier domain for h2
% 
% % Compute min-norm solution using pseudoinverse
% f_est_g1 = real(ifft2(pinv(H1_fft) .* G1_fft));
% f_est_g2 = real(ifft2(pinv(H2_fft) .* G2_fft));
% 
% % Display the original image and recovered images
% figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);
% 
% subplot(1, 3, 1); 
% imshow(f, []); 
% title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
% 
% subplot(1, 3, 2); 
% imshow(f_est_g1, []); 
% title('Deblurred Image for z1 = 0.1mm', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
% 
% subplot(1, 3, 3); 
% imshow(f_est_g2, []); 
% title('Deblurred Image for z2 = -0.2mm', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
% 
% % Save the figure with reduced margin
% saveas(gcf, 'problem_3_1_1.png');
% 
% % Calculate PSNR between deblurred_image1 and original f
% psnr_deblurred_image1 = psnr(uint8(f_est_g1), uint8(f));
% 
% % Calculate PSNR between deblurred_image2 and original f
% psnr_deblurred_image2 = psnr(uint8(f_est_g2), uint8(f));
% 
% % Display PSNR values
% fprintf('PSNR between the deblurred image 1 (regarding h1 and z1) and the original f: %.2f dB\n', psnr_deblurred_image1);
% fprintf('PSNR between the deblurred image 2 (regarding h2 and z2) and the original f: %.2f dB\n', psnr_deblurred_image2);

% % Load data
% f = load('I1.mat').I1;  % Original object
% h1 = load('psf1.mat').psf1;  % PSF for z1 = 0.1mm
% h2 = load('psf2.mat').psf2;  % PSF for z2 = -0.2mm
% 
% % Compute Fourier transforms
% H1_fft = fft2(h1, size(f, 1), size(f, 2));  % Fourier transform of PSF h1
% H2_fft = fft2(h2, size(f, 1), size(f, 2));  % Fourier transform of PSF h2
% F_fft = fft2(f);  % Fourier transform of object f
% 
% % Compute the convolved Fourier transforms
% G1_fft = F_fft .* H1_fft;  % Convolution in the Fourier domain for h1
% G2_fft = F_fft .* H2_fft;  % Convolution in the Fourier domain for h2
% 
% % Minnorm solution using gradient descent for deconvolution - G1_fft
% 
% % Define parameters
% num_iterations = 1000;  % Number of iterations
% step_size = 0.01;  % Step size for gradient descent
% lambda = 0.001;  % Regularization parameter
% 
% % Initialize the estimate
% f_est_g1 = f;  % Start with the original object
% 
% % Iterate to minimize the least-squares solution for G1_fft
% for iter = 1:num_iterations
%     % Compute gradient of the objective function
%     gradient = 2 * (real(ifft2((H1_fft .* fft2(f_est_g1)) - G1_fft)) .* H1_fft) + ...
%                2 * lambda * f_est_g1;
% 
%     % Update estimate using gradient descent
%     f_est_g1 = f_est_g1 - step_size * gradient;
% 
%     % Clip negative values to maintain non-negativity constraint
%     f_est_g1(f_est_g1 < 0) = 0;
% end
% 
% % Minnorm solution using gradient descent for deconvolution - G2_fft
% 
% % Initialize the estimate
% f_est_g2 = f;  % Start with the original object
% 
% % Iterate to minimize the least-squares solution for G2_fft
% for iter = 1:num_iterations
%     % Compute gradient of the objective function
%     gradient = 2 * (real(ifft2((H2_fft .* fft2(f_est_g2)) - G2_fft)) .* H2_fft) + ...
%                2 * lambda * f_est_g2;
% 
%     % Update estimate using gradient descent
%     f_est_g2 = f_est_g2 - step_size * gradient;
% 
%     % Clip negative values to maintain non-negativity constraint
%     f_est_g2(f_est_g2 < 0) = 0;
% end
% 
% % Display the original image and recovered images
% figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);
% 
% subplot(1, 3, 1); 
% imshow(f, []); 
% title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
% 
% subplot(1, 3, 2); 
% imshow(f_est_g1, []); 
% title('Deblurred Image for z1 = 0.1mm', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
% 
% subplot(1, 3, 3); 
% imshow(f_est_g2, []); 
% title('Deblurred Image for z2 = -0.2mm', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');
% 
% % Save the figure with reduced margin
% saveas(gcf, 'problem_3_1.png');
% 
% % Calculate PSNR between deblurred_image1 and original f
% psnr_deblurred_image1 = psnr(uint8(f_est_g1), uint8(f));
% 
% % Calculate PSNR between deblurred_image2 and original f
% psnr_deblurred_image2 = psnr(uint8(f_est_g2), uint8(f));
% 
% % Display PSNR values
% fprintf('PSNR between the deblurred image 1 (regarding h1 and z1) and the original f: %.2f dB\n', psnr_deblurred_image1);
% fprintf('PSNR between the deblurred image 2 (regarding h2 and z2) and the original f: %.2f dB\n', psnr_deblurred_image2);
% 
