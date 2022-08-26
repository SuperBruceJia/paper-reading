## Packages
```latex
\documentclass[lettersize, journal]{IEEEtran}
\usepackage{amsmath, amssymb, amsfonts}
\usepackage[compress]{cite}
\usepackage{multirow}
\usepackage{booktabs}
\usepackage{enumitem}
\usepackage[pdftex]{graphicx}
\usepackage[outdir=./generate/]{epstopdf}

\hyphenation{op-tical net-works semi-conduc-tor IEEE-Xplore}
\def\BibTeX{{\rm B\kern-.05em{\sc i\kern-.025em b}\kern-.08em
		T\kern-.1667em\lower.7ex\hbox{E}\kern-.125emX}}

\usepackage[labelformat=simple]{subcaption}
\captionsetup[sub]{font=footnotesize}
\captionsetup[figure]{name={Fig.}, labelsep=period, font=footnotesize} 
\renewcommand\thesubfigure{(\alph{subfigure})}
\captionsetup[table]{name={TABLE}, labelsep=newline, font=footnotesize, labelfont=footnotesize, textfont=sc, justification=centering}

\newcommand{\refsec}[1]{Section~\ref{#1}}
\newcommand{\reffig}[1]{Fig.~\ref{#1}}
\newcommand{\reftab}[1]{Table~\ref{#1}}
\newcommand{\refequ}[1]{Eqn.~\eqref{#1}}
\newcommand{\tabincell}[2]{\begin{tabular}{@{}#1@{}}#2\end{tabular}}

\newcommand{\etal}{\emph{et al}. }
\newcommand{\ie}{\emph{i}.\emph{e}.}
\newcommand{\eg}{\emph{e}.\emph{g}.}
```

---

## Document
```latex
\begin{document}
	\title{XXX}
	\author{XXX, \IEEEmembership{Student Member, IEEE}, and XXX
		
		\IEEEcompsocitemizethanks{
%			\IEEEcompsocthanksitem This work is supported by the XXX under Grant XXX.~\emph{(Corresponding Author: XXX.)}
			\IEEEcompsocthanksitem * indicates co-first authorship.
			\IEEEcompsocthanksitem XXX is with the XXX, Jinan 250102, China (e-mail: XXX).
		}
	}
	
	\markboth{Journal of \LaTeX\ Class Files,~Vol.~18, No.~9, September~2020}
	{How to Use the IEEEtran \LaTeX \ Templates}
	
	\IEEEtitleabstractindextext{
		\begin{abstract}
      XXX
		\end{abstract}
		
		\begin{IEEEkeywords}
			XXX, XXX, XXX, XXX, XXX.
		\end{IEEEkeywords}
	}
	
	\maketitle
	\IEEEdisplaynontitleabstractindextext
	
	\section{Introduction}\label{Introduction}
	\IEEEPARstart{R}{ecently}, XXXXXXXXXXXXXXXX

	\bibliographystyle{ieeetr}
	\bibliography{bibliography}

\end{document}
  
```
---

## Table
```latex
\begin{table}[h]
  \centering
  \footnotesize
  \caption{Performance comparisons on the High Gamma Dataset}
  \resizebox{\linewidth}{!}{
    \begin{tabular}{lccccc}
      \toprule
      Related Work & Avg. Accuracy & \emph{p}-value & Level & Approach & Dataset \\ \midrule
      Schirrmeister~\etal (2017)~\cite{schirrmeister2017deep} & 92.50\% & $<0.05$ & \multirow{3}{*}{Subject} & CNNs & \multirow{3}{*}{\begin{tabular}[c]{@{}c@{}}1 subjects\end{tabular}} \\
      Li~\etal (2019)~\cite{li2019channel} & 93.70\% & $<0.05$ & & CP-MixedNet & \\ 
      Tang~\etal (2020)~\cite{tang2020conditional} & 95.30\% & $>0.05$ & & DAN & \\ 
      \multirow{2}{*}{\textbf{Author}} & \textbf{80.89\%} & \multirow{2}{*}{$-$} & \textbf{Group} & \multirow{2}{*}{\textbf{GCNs-Net}} & \textbf{\begin{tabular}[c]{@{}c@{}}14 subject\end{tabular}} \\
      & \textbf{96.24\%} & & \textbf{Subject} & & \textbf{\begin{tabular}[c]{@{}c@{}}1 subject\end{tabular}} \\ 
      \bottomrule
    \end{tabular}
    \label{Results Comparison-Different dataset}
  }
\end{table}
```

---

## Figure
```latex
\begin{figure}[h]
  \centering
  \begin{minipage}[t]{.48\linewidth}
    \includegraphics[width=1.8in]{source/GAA_Various_Sizes_Dataset.eps}
    \subcaption{}
    \label{Accuracy Various Dataset}
  \end{minipage}
  \begin{minipage}[t]{.48\linewidth}
    \includegraphics[width=1.8in]{source/Loss_Various_Sizes_Dataset.eps}
    \subcaption{}
    \label{Loss Various Dataset}
  \end{minipage}
  \caption{Accuracy and loss regarding various sizes of datasets,~\ie, 20, 50, and 100 subjects, from the PhysioNet Dataset. (a) Accuracy regarding various sizes of datasets. (b) Loss regarding various sizes of datasets.}
  \label{Accuracy and Loss various dataset}
\end{figure}
```

---

## Equation
```latex
\begin{equation}
  \mathrm{Softplus}(\boldsymbol{\rm x})=\log\left(1+\mathrm{exp}\left(\boldsymbol{\rm x}\right)\right).
\end{equation}
```

---

## bibliography
```latex
\bibliographystyle{ieeetr}
\bibliography{bibliography}
```
