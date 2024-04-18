%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 1 - 4
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 1/21/2024

%% Step 1: Define the Signal and Plot

% Define the range for x and y
dx = 0.01;
dy = dx;
x = -2:dx:2-dx;
y = -2:dy:2-dx;
Nx = length(x);
Ny = length(y);

% Create a meshgrid for x and y
[X, Y] = meshgrid(x, y);

% Define the 2D signal f
f = cos(20 * pi * X);


%% DFT
% Define original fx, fy
fx_max = 1/dx/2;
fy_max = 1/dy/2;
dfx = 2*fx_max/Nx;
dfy = 2*fy_max/Ny;
fx = -fx_max:dfx:fx_max-dfx;
fy = -fy_max:dfy:fy_max-dfx;

% Create a meshgrid for Fx and Fy
[Fx, Fy] = meshgrid(fx, fy);

% define FFT with proper fftshift
FT = @(x) fftshift(fft2(ifftshift(x)));
FTinv = @(x) fftshift(ifft2(ifftshift(x)));

F = FT(f);

% Plot f
figure;
subplot(2, 2, 1);
imagesc(x, y, f);
title('Signal f');
colorbar;

% plot the DFT of f
subplot(2, 2, 2);
imagesc(x, y, log(abs(F)));
title('DFT of f');
colorbar;

%% Step 2: Add Noise, Plot Noisy Signal and Its DFT
% Add Gaussian noise
noise_std = 0.2;
n = noise_std * randn(size(f));
f_n = f + n;

% Plot f_n
subplot(2, 2, 3);
imagesc(x, y, f_n);
title('Noisy Signal f_n');
colorbar;

% Compute and plot the DFT of f_n
F_n = FT(f_n);
subplot(2, 2, 4);
imagesc(x, y, log(abs(F_n)));
title('DFT of f_n');
colorbar;


%% Step 3: Compute and Display SNR Based on Energy
% Compute the total energy in f
energy_f = sum(f(:).^2);

% Compute the total energy in noise n
energy_n = sum(n(:).^2);

% Compute SNR
SNR = energy_f / energy_n;

% Display SNR
disp(['Signal-to-Noise Ratio (SNR) based on energy: ', num2str(SNR)]);

