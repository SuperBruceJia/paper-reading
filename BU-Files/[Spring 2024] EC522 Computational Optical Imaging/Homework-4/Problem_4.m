% Extract data from loaded files
f = load('I1.mat').I1;  % Object f

% Standard deviations for different WGN levels
n_std_1 = 1;
n_std_10 = 10;

% Generate noisy images with different WGN levels
I_noisy_1 = normrnd(f, n_std_1, size(f));
I_noisy_10 = normrnd(f, n_std_10, size(f));

% Display results
figure('Units', 'normalized', 'Position', [0.1, 0.1, 0.8, 0.4]);

subplot(1, 3, 1);
imshow(f, []);
title('Original Object f', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 2);
imshow(I_noisy_1, []);
title('Noisy Image (WGN std = 1)', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

subplot(1, 3, 3);
imshow(I_noisy_10, []);
title('Noisy Image (WGN std = 10)', 'FontName', 'Times New Roman', 'FontSize', 24, 'FontWeight', 'bold');

% Save the figure with reduced margin
saveas(gcf, 'problem_4.png');
