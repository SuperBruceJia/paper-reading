%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 1 - 2
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 1/21/2024

%% define the object f

% Define the range for x and y
x = -50:1:49;
y = -50:1:49;

% Create a meshgrid for x and y
[X, Y] = meshgrid(x, y);

% Initialize the object f with zeros
f = zeros(size(X));

% Define point sources
point_sources = [0, 0; 5, 0; 0, 5; -48, 0; 0, 48; 48, 48];

% Place point sources in f
for i = 1:size(point_sources, 1)
    f(X == point_sources(i, 1) & Y == point_sources(i, 2)) = 1;
end

% Display the original object f
figure(1);
imagesc(x, y, f);
axis image;
title('Original Object f');
colorbar;

%% Define the PSF h

% Define the PSF as a circular function
diameter = 15;
radius = diameter / 2;
h = sqrt((X.^2 + Y.^2)) <= radius;

% Display the PSF h
figure(2);
imagesc(x, y, h);
axis image;
title('Point Spread Function h');
colorbar;

%% Step 3(a): Direct Convolution in Spatial Domain

% Direct convolution
g_direct = conv2(f, h, 'full');

% Display the result of direct convolution
figure(3);
imagesc(x, y, g_direct);
axis image;
title('Direct Convolution Result');
colorbar;

%% Step 3(b): Convolution Using DFT

% define FFT with proper fftshift
FT = @(x) fftshift(fft2(ifftshift(x)));
FTinv = @(x) fftshift(ifft2(ifftshift(x)));

% Compute DFT of f and h
F = FT(f);
H = FT(h);

% Multiply in frequency domain
G = F .* H;

% Inverse DFT to get the result
g_dft = FTinv(G);

% Display the result of DFT-based convolution
figure(4);
imagesc(x, y, abs(g_dft));
axis image;
title('DFT-based Convolution Result');
colorbar;

%% Step 4: Discuss Differences

% The difference in results between the direct method and the DFT-based 
% method is typically due to boundary effects and the circular nature 
% of the DFT-based convolution. In the DFT method, the signal is assumed 
% to be periodic, which can lead to artifacts at the boundaries.

%% Step 5: Zero-Padding and Repeat DFT-Based Convolution

% Zero-padding
f_padded = padarray(f, size(f)/2, 'both');
h_padded = padarray(h, size(f)/2, 'both');

% Compute DFT of zero-padded f and h
F_padded = FT(f_padded);
H_padded = FT(h_padded);

% Multiply in frequency domain
G_padded = F_padded .* H_padded;

% Inverse DFT to get the result
g_dft_padded = FTinv(G_padded);

% Display the zero-padded f
figure(5);
imagesc(f_padded);
axis image;
title('Zero-Padded f');
colorbar;

% Display the result of zero-padded DFT-based convolution
figure(6);
imagesc(abs(g_dft_padded));
axis image;
title('Zero-Padded DFT Convolution Result');
colorbar;



