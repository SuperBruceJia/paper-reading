## Document Class
```latex
\documentclass[conference]{IEEEtran}
\IEEEoverridecommandlockouts
% The preceding line is only needed to identify funding in the first footnote. If that is unneeded, please comment it out.
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx}
\def\BibTeX{{\rm B\kern-.05em{\sc i\kern-.025em b}\kern-.08em
		T\kern-.1667em\lower.7ex\hbox{E}\kern-.125emX}}
\usepackage[compress]{cite}
\usepackage{multirow}
\usepackage{booktabs}

\newcommand{\reffig}[1]{Figure~\ref{#1}}
\newcommand{\reftab}[1]{Table~\ref{#1}}
\newcommand{\refequ}[1]{Eqn.~\eqref{#1}}
\newcommand{\tabincell}[2]{\begin{tabular}{@{}#1@{}}#2\end{tabular}}
\newcommand{\etal}{\emph{et al}. }
\newcommand{\ie}{\emph{i}.\emph{e}.}
\newcommand{\eg}{\emph{e}.\emph{g}.}

\makeatletter
\def\ps@IEEEtitlepagestyle{%
\def\@oddfoot{\mycopyrightnotice}%
\def\@evenfoot{}%
}
\def\mycopyrightnotice{%
{\footnotesize 978-1-6654-7189-3/22/\$31.00~\copyright~2022 IEEE\hfill}
\gdef\mycopyrightnotice{}
}
```

---

## Document
```latex
\begin{document}
	\title{XXXX \\

    \thanks{XXX (email: XXX).}
}
    
	\author{
		\IEEEauthorblockN{XXX}
		\IEEEauthorblockA{Dept. of Computer Science \\
			City University of Hong Kong \\
			Hong Kong, China \\
			XXX@my.cityu.edu.hk}
		\and
		\IEEEauthorblockN{XXX}
		\IEEEauthorblockA{Dept. of Computer Science \\
			City University of Hong Kong \\
			Hong Kong, China \\
			XXX@my.cityu.edu.hk}
 }
	\maketitle
 	

	\begin{abstract}
		XXX.
	\end{abstract}
	
	\begin{IEEEkeywords}
		XXX, XXX, XXX, XXX, XXX.
	\end{IEEEkeywords}
	
	\section{Introduction}
	\IEEEPARstart{T}{he} image 
	
  \bibliographystyle{ieeetr}
	\bibliography{bibliography}
	
\end{document}
```

---

## Framework Figure
```latex
	\begin{figure*}[!ht]
		\centering
		\includegraphics[width=.95\linewidth]{overview.pdf}
		\caption{XXX.}
		\label{Overview}
	\end{figure*}

```

---

## Contributions Summary
```latex
\begin{itemize}
  \item XXX.
  \item XXX.
  \item XXX.
\end{itemize}
```

---

## Table
```latex
\begin{table}[!t]
    \centering
  \caption{Brief summary of the LIVE, CSIQ, and TID2013 databases}
  \label{database}
% 		\resizebox{\linewidth}{!}{
    \begin{tabular}{lccc}
      \toprule
      Database & LIVE & CSIQ & TID2013 \\ 
      \midrule
      Number of Reference Images & 29 & 30 & 25 \\
      Number of Images & 779 & 866 & 3,000 \\
      Number of Distortion Types & 5 & 6 & 24 \\
      Number of Distortion Levels & $5\sim8$ & $3\sim5$ & 5 \\
      Annotation & DMOS & DMOS & MOS \\
      Range & [0, 100] & [0, 1] & [0, 9]\\
      \bottomrule
    \end{tabular}
% 		}
\end{table}
```
