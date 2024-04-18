%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Boston University
% Department of Electrical and Computer Engineering
% EC522 Computational Optical Imaging
% Solutions to Homework No. 1 - 1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Last modified by Lei Tian (leitian@bu.edu), 1/21/2024

%% original signal
% Define the range for x and y
dx = 0.01;
dy = dx;
x = -2:dx:2-dx;
y = -2:dy:2-dx;
Nx = length(x);
Ny = length(y);

% Create a meshgrid for x and y
[X, Y] = meshgrid(x, y);

% Compute the 2D signal
g1 = cos(20 * pi * X);
g2 = cos(40 * pi * Y);
g3 = cos(20 * pi * X + 40 * pi * Y);
g4 = cos(20 * pi * X) + cos(40 * pi * Y);



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
F = @(x) fftshift(fft2(ifftshift(x)));
Ft = @(x) fftshift(ifft2(ifftshift(x)));

% DFT of the signal
G1 = F(g1);
G2 = F(g2);
G3 = F(g3);
G4 = F(g4);


%% visualization
% Visualize the signal 
figure(1);
imagesc(x, y, g1);
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('2D Signal');
xlabel('x');
ylabel('y');

% Visualize the DFT of the signal 
figure(2);
imagesc(fx, fy, abs(G1));
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('DFT');
xlabel('f_x');
ylabel('f_y');
colormap hot



% Visualize the signal 
figure(3);
imagesc(x, y, g2);
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('2D Signal');
xlabel('x');
ylabel('y');

% Visualize the DFT of the signal 
figure(4);
imagesc(fx, fy, abs(G2));
colorbar; % Adds a color bar to indicate the scale
axis image; % Corrects the axis orientation
title('DFT');
xlabel('f_x');
ylabel('f_y');
colormap hot


% Visualize the signal 
figure(5);
imagesc(x, y, g3);
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('2D Signal');
xlabel('x');
ylabel('y');

% Visualize the DFT of the signal 
figure(6);
imagesc(fx, fy, abs(G3));
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('DFT');
xlabel('f_x');
ylabel('f_y');
colormap hot


% Visualize the signal 
figure(7);
imagesc(x, y, g4);
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('2D Signal');
xlabel('x');
ylabel('y');

% Visualize the DFT of the signal 
figure(8);
imagesc(fx, fy, abs(G4));
colorbar; % Adds a color bar to indicate the scale
axis image; 
title('DFT');
xlabel('f_x');
ylabel('f_y');
colormap hot


