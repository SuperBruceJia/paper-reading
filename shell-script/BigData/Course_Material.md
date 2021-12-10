# Big Data Overview

**Five V**: volume, varity, velocity, value, veracity

## Data Evolution & Rise of Big Data Sources

TB (Terabyte) - 1990s (RDBMS & DATA WAREHOUSE)

PB (Petabyte) - 2000s (CONTENT & DIGITAL ASSET MANAGEMENT)

EB (Exabyte) - 2010s (NO-SQL & KEY VALUE)

ZB (Zettabyte)

YB (Yottabyte)

## Data Structures: Characteristics of Big Data

**Structured** - defined data type, format, structure
    Transactional data, OLAP cubes, RDBMS, CSV files, spreadsheets

**Semi-structured**
    Text data with discernable patterns
    e.g. XML data

**Quasi-structured**
    Text data with erratic data formats
    e.g. clickstream data

**Unstructured**
    Data with no inherent structure - text docs, PDF's, images, video

## Types of Data Repositories from an Analyst Perspective

Spreadsheets and data marts (*spreadmarts")

Data Warehouses

Analytic Sandbox (workspaces)

# Data Analytics Lifecycle

**Traditional KDD**: Knowledge discovery in database (Data Mining)

## Traditional KDD Process

Data -> Target Data -> Preprocessed Data -> Transformed Data -> Patterns -> Knowledge

Selection, Preprocessing, Transformation, Data Mining, Interpretation and Evaluation

## Data Analytics Lifecycle

Phase 1: Discovery

Phase 2: Data Preparation

Phase 3: Model Planning

Phase 4: Model Building

Phase 5: Result Communication

Phase 6: Resultant Operation

## ETL

**ETL steps**: extract, transform, load

Shneiderman's mantra: "Overview first, zoom and filter, then details-on-demand"

## Business Intelligence

Optimize business operations

Identify business risk

Predict new business opportunities

Comply with laws or regulatory requirements

# Data Computing: Text Data

Data Computing → **Unstructure data** (e.g., Text data) → big data

Data Mining + Data processing + Data Representation

**Text Analysis** (or Text Analytics) concerns the representation,
processing, and modeling of text data to derive useful insights

**Text Mining** is the important component of Text Analysis that
discovers the relationships and interesting patterns

**Corpus** - large collection of texts (plural of corpus is corpora)

**Dimension** - number of distinct words or base forms in corpus

**Bag-of-words**: word frequency (count how many occurrences for each word) 

**Cons**: Loses all order-specific information and symantic meaning! Severely limits context!

<img width="902" alt="image" src="https://user-images.githubusercontent.com/31528604/145528106-75417b4d-e8e0-4277-9b4c-ae5db208594a.png">

Parsing: NLP

Imposes a structure on the unstructured text

**Part-of-Speech (POS) Tagging**: 
    "he saw a fox" => PRP VBD DT NN

    pronoun (PRP), verb (VBD), determiner (DT), noun (NN)
    
**Lemmatization** With Dictionary
    finds dictionary base forms
    obesity causes many problems => obesity cause many problem

**Stemming** Without Dictionary,
    (e.g., Porter's stemming algorithm) systematic
    Similar to lemmatization but dictionary not required
    obesity causes many problems => obes caus mani problem
    
<img width="903" alt="image" src="https://user-images.githubusercontent.com/31528604/145528390-b2192b0c-34cd-4a15-a4ff-dad3bd3e19ad.png">

Tokenization separates words from the text

Case folding reduces all letters to lowercase

### Term Frequency Inverse Document Frequency (TF-IDF)

Topic modeling

Latent Dirichlet Allocation (LDA)

**Sentiment analysis** is a group of tasks that use statistics and NLP to mine opinions from texts

# Time Series

Box-Jenkins Methodology

Autoregressive Integrated Moving Average (**ARIMA**) model

→ model the underlying Structure of observations over time

**time series**: ordered sequence of **equally spaced values**

one variable → 有sequence dependency 

**Data are not independent**: Much of the statistical theory relies on the data being independent and identically distributed

(X1, X2, X3, ......) ordered data

<img width="972" alt="image" src="https://user-images.githubusercontent.com/31528604/145529664-471f7e87-a6f8-4f2a-8f81-09deb3296f52.png">

# Parallel Computing Theory

Serial Computing: 

A problem is broken into a discrete series of instructions
Instructions are executed sequentially one after another
Executed on a single processor
Only one instruction may execute at any moment in time

Parallel Computing: 

**simultaneous** use of multiple compute resources to solve a
computational problem:
A problem is broken into discrete parts that can be solved
**concurrently**
Each part is further broken down to a series of instructions
Instructions from each part execute simultaneously on different
processors
An overall control/coordination mechanism is employed

<img width="952" alt="image" src="https://user-images.githubusercontent.com/31528604/145530032-336870ce-9b3e-40cd-b780-30554eab55eb.png">

Flynn's Classical Taxonomy


