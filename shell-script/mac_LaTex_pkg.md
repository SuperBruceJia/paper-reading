# Install LaTex Package through Terminal
```shell
cd /usr/local/texlive/2022/bin/universal-darwin

sudo ./tlmgr update --self

sudo ./tlmgr install XXX
```

# Compile Tex files via Terminal

```shell
/usr/local/texlive/2022/bin/universal-darwin/pdflatex -interaction=batchmode thesis_body.tex
```

# EPS File to PDF file

## EPS to PDF:

brew install ghostscript

brew link --overwrite ghostscript 

```latex
\usepackage[pdftex]{graphicx}
\usepackage[outdir=./generate/]{epstopdf}

\begin{figure}[h]
  \centering
  \begin{minipage}[t]{.48\linewidth}
    \includegraphics[width=1.8in]{GAA_Various_Sizes_Dataset.eps}
    \subcaption{}
    \label{Accuracy Various Dataset}
  \end{minipage}
  \begin{minipage}[t]{.48\linewidth}
    \includegraphics[width=1.8in]{Loss_Various_Sizes_Dataset.eps}
    \subcaption{}
    \label{Loss Various Dataset}
  \end{minipage}
  \caption{Accuracy and loss regarding various sizes of datasets,~\ie, 20, 50, and 100 subjects, from the PhysioNet Dataset. (a) Accuracy regarding various sizes of datasets. (b) Loss regarding various sizes of datasets.}
  \label{Accuracy and Loss various dataset}
\end{figure}
```


