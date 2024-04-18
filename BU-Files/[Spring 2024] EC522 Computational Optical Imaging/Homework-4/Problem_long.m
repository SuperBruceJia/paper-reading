clear; clc; close all;
f = load('I1.mat').I1;
h1 = load('psf1.mat').psf1;
h2 = load('psf2.mat').psf2;

H1_fft = fft2(h1, size(f, 1), size(f, 2));
H2_fft = fft2(h2, size(f, 1), size(f, 2));
F_fft = fft2(f);

G1_fft = F_fft .* H1_fft;
G2_fft = F_fft .* H2_fft;

cond_num_h1 = max(abs(H1_fft(:))) / min(abs(H1_fft(H1_fft ~= 0)));
cond_num_h2 = max(abs(H2_fft(:))) / min(abs(H2_fft(H2_fft ~= 0)));

% fprintf('Condition number for h1 (z1 = 0.1mm): %.2f\n', cond_num_h1);
% fprintf('Condition number for h2 (z2 = -0.2mm): %.2f\n', cond_num_h2);

tikhonov_deconv = @(G_fft, H_fft, lambda) ifft2((conj(H_fft) .* G_fft) ./ (abs(H_fft).^2 + lambda));
lambda = 0.01;
f_rec1_tikhonov = tikhonov_deconv(G1_fft, H1_fft, lambda);
f_rec2_tikhonov = tikhonov_deconv(G2_fft, H2_fft, lambda);

figure; 
subplot(2,2,1); imshow(abs(f_rec1_tikhonov), []); title('Recovered Image 1 using Tikhonov Deconvolution');
subplot(2,2,2); imshow(abs(f_rec2_tikhonov), []); title('Recovered Image 2 using Tikhonov Deconvolution');


[U1, S1, V1] = svd(H1_fft, 'econ');
S1_inv = diag(1 ./ diag(S1));
x1_min_norm = V1 * S1_inv * U1' * F_fft;
f1_rec_min_norm = ifft2(x1_min_norm);
subplot(2,2,3); imshow(abs(f1_rec_min_norm), []); title('Recovered Image 1 using Min-Norm Solution');

[U2, S2, V2] = svd(H2_fft, 'econ');
S2_inv = diag(1 ./ diag(S1));
x2_min_norm = V2 * S2_inv * U2' * F_fft;
f2_rec_min_norm = ifft2(x2_min_norm);
subplot(2,2,4); imshow(abs(f2_rec_min_norm), []); title('Recovered Image 2 using Min-Norm Solution')

n_std = [1, 5, 10];
Ny = size(f, 1);
Nx = size(f, 2);
for i = 1:length(n_std)
    I_noisy = normrnd(f, n_std(i), Ny, Nx);
    H1_fft = fft2(h1, Ny, Nx); 
    H2_fft = fft2(h2, Ny, Nx);
    lambda = 0.01;
    I_noisy_fft = fft2(I_noisy);
    I1_deblurred_tik = tikhonov_deconv(I_noisy_fft, H1_fft, lambda);
    I2_deblurred_tik = tikhonov_deconv(I_noisy_fft, H2_fft, lambda);
    [U1, S1, V1] = svd(H1_fft, 'econ');
    S1_inv = diag(1 ./ diag(S1));
    I1_min_norm = V1 * S1_inv * U1' * I_noisy_fft;
    I1_deblurred_min = ifft2(x1_min_norm);
    [U2, S2, V2] = svd(H2_fft, 'econ');
    S2_inv = diag(1 ./ diag(S1));
    I2_min_norm = V2 * S2_inv * U2' * I_noisy_fft;
    I2_deblurr
end