% Load data
f = load('I1.mat').I1;  % Object
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

% Display the condition numbers
fprintf('Condition number for h1 (z1 = 0.1mm): %.2f\n', cond_num_h1);
fprintf('Condition number for h2 (z2 = -0.2mm): %.2f\n', cond_num_h2);
