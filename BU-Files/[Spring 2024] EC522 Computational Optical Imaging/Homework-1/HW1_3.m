%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 1 - 4
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 1/21/2024

%% Step 1: Read an Image

% Read an image
img = imread('path_to_your_image.jpg'); % Replace with your image path
img = rgb2gray(img); % Convert to grayscale if it's a color image


%% Step 2: Create an Ideal Circular Low-Pass Filter

% Image dimensions
[M, N] = size(img);

% Create a meshgrid
[u, v] = meshgrid(-N/2:N/2-1, -M/2:M/2-1);

% Define the radius for the low-pass filter
D0 = 50; % Change this value as needed

% Create the ideal circular low-pass filter
H_low = sqrt(u.^2 + v.^2) <= D0;


%% Step 3: Apply Low-Pass Filter


% define FFT with proper fftshift
FT = @(x) fftshift(fft2(ifftshift(x)));
FTinv = @(x) fftshift(ifft2(ifftshift(x)));

% Compute the FFT of the image
F = FT(double(img));

% Apply the low-pass filter
G_low = H_low .* F;

% Inverse FFT to get the low-pass filtered image
img_low = real(FTinv(G_low));

%% Step 4: Create and Apply High-Pass Filter

% Create the high-pass filter
H_high = 1 - H_low;

% Apply the high-pass filter
G_high = H_high .* F;

% Inverse FFT to get the high-pass filtered image
img_high = real(FTinv(G_high));

%% Step 5: Display the Results
% Display the original and filtered images
figure;
subplot(1,3,1), imshow(img), title('Original Image');
subplot(1,3,2), imshow(img_low, []), title('Low-Pass Filtered Image');
subplot(1,3,3), imshow(img_high, []), title('High-Pass Filtered Image');




