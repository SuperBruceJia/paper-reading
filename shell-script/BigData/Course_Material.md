# Big Data Overview

**Five V**: volume, varity, velocity, value, veracity

## Data Evolution & Rise of Big Data Sources

TB (Terabyte) - 1990s (RDBMS & DATA WAREHOUSE)

PB (Petabyte) - 2000s (CONTENT & DIGITAL ASSET MANAGEMENT)

EB (Exabyte) - 2010s (NO-SQL & KEY VALUE)

ZB (Zettabyte)

YB (Yottabyte)

<img width="1284" alt="image" src="https://user-images.githubusercontent.com/31528604/145532442-158dacec-36d3-4cf5-93ce-c585a0e5592e.png">

<img width="1205" alt="image" src="https://user-images.githubusercontent.com/31528604/145537912-c868ecf8-c3f6-41cf-9841-42666d2e6fa4.png">

<img width="1207" alt="image" src="https://user-images.githubusercontent.com/31528604/145538019-80abe98b-375c-451c-93d5-d748d5471744.png">

<img width="1206" alt="image" src="https://user-images.githubusercontent.com/31528604/145538043-95185ab5-f687-4ffd-8ca8-9eaee35f9f4b.png">

<img width="1204" alt="image" src="https://user-images.githubusercontent.com/31528604/145538138-89af50c4-e06e-4395-bbfe-e6203f125ad4.png">

<img width="1212" alt="image" src="https://user-images.githubusercontent.com/31528604/145538311-b7cfb691-69bf-4d73-b11e-207b83b54d41.png">

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

<img width="1241" alt="image" src="https://user-images.githubusercontent.com/31528604/145532477-11bbe76b-3094-4fca-afe6-12559ed643af.png">

## Types of Data Repositories from an Analyst Perspective

Spreadsheets and data marts (*spreadmarts")

Data Warehouses

Analytic Sandbox (workspaces)

# Data Analytics Lifecycle

**Traditional KDD**: Knowledge discovery in database (Data Mining)

## Traditional KDD Process

Data -> Target Data -> Preprocessed Data -> Transformed Data -> Patterns -> Knowledge

Selection, Preprocessing, Transformation, Data Mining, Interpretation and Evaluation

<img width="1189" alt="image" src="https://user-images.githubusercontent.com/31528604/145532555-ccb19423-6ce8-4885-b224-6e1709a4640b.png">

## Data Analytics Lifecycle

Phase 1: Discovery

Phase 2: Data Preparation

Phase 3: Model Planning

Phase 4: Model Building

Phase 5: Result Communication

Phase 6: Resultant Operation

<img width="1191" alt="image" src="https://user-images.githubusercontent.com/31528604/145532581-926ea123-ade1-48c9-9199-1952ffea0888.png">

## ETL

**ETL steps**: extract, transform, load

<img width="1187" alt="image" src="https://user-images.githubusercontent.com/31528604/145532671-59111b34-83a7-4879-9ed4-ed34a1257d68.png">

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

<img width="1274" alt="image" src="https://user-images.githubusercontent.com/31528604/145533070-60f13ced-c8f9-42b9-ad64-607d0bd330ba.png">

<img width="1275" alt="image" src="https://user-images.githubusercontent.com/31528604/145533102-9da63a71-834d-4100-b65e-2df4c43c9146.png">

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

<img width="1269" alt="image" src="https://user-images.githubusercontent.com/31528604/145533372-9f7a937e-befd-4209-ac08-909b31587301.png">

### Term Frequency Inverse Document Frequency (TF-IDF)

Topic modeling

Latent Dirichlet Allocation (LDA)

**Sentiment analysis** is a group of tasks that use statistics and NLP to mine opinions from texts

# Time Series

Box-Jenkins Methodology

Autoregressive Integrated Moving Average (**ARIMA**) model

→ model the underlying Structure of observations over time

<img width="1173" alt="image" src="https://user-images.githubusercontent.com/31528604/145533754-8e646b26-60e8-40bd-9b40-fadb261365d9.png">

<img width="1168" alt="image" src="https://user-images.githubusercontent.com/31528604/145533782-4ce1ec59-f0e0-4d91-a701-78c27da72e2d.png">

<img width="1173" alt="image" src="https://user-images.githubusercontent.com/31528604/145533893-3bede75c-48d1-4ef5-8790-9421225fe3f9.png">

<img width="1168" alt="image" src="https://user-images.githubusercontent.com/31528604/145533923-b1d37105-809b-4520-a744-3dd27d2ce2e2.png">

<img width="1171" alt="image" src="https://user-images.githubusercontent.com/31528604/145534009-1ae25ddc-b118-4deb-a6d7-c01176bfd6a4.png">

<img width="1162" alt="image" src="https://user-images.githubusercontent.com/31528604/145534032-71a3a32d-963e-4ef5-aec4-8949b4129a74.png">

<img width="1171" alt="image" src="https://user-images.githubusercontent.com/31528604/145534108-b8e2847b-f1d4-4af8-8d4f-0001281777e6.png">

<img width="1172" alt="image" src="https://user-images.githubusercontent.com/31528604/145534130-10045927-560d-4d4b-bc6c-2d18de8049ec.png">

<img width="1170" alt="image" src="https://user-images.githubusercontent.com/31528604/145534279-44f56f6c-9cbf-49bf-9942-04930c85ce26.png">

<img width="1167" alt="image" src="https://user-images.githubusercontent.com/31528604/145534305-c0acafd0-5cfd-4966-93ff-348adf144cfb.png">

**time series**: ordered sequence of **equally spaced values**

one variable → 有sequence dependency 

**Data are not independent**: Much of the statistical theory relies on the data being independent and identically distributed

(X1, X2, X3, ......) ordered data

<img width="972" alt="image" src="https://user-images.githubusercontent.com/31528604/145529664-471f7e87-a6f8-4f2a-8f81-09deb3296f52.png">

<img width="1169" alt="image" src="https://user-images.githubusercontent.com/31528604/145534456-6dfbe4a1-0390-4b64-ab34-0f05f011d486.png">

# Parallel Computing Theory

Serial Computing: 

    Instructions are executed sequentially one after another

Parallel Computing: 

    Instructions from each part execute simultaneously on different processors

<img width="952" alt="image" src="https://user-images.githubusercontent.com/31528604/145530032-336870ce-9b3e-40cd-b780-30554eab55eb.png">

## von Neumann Architecture

1. Memory
2. Control Unit
3. Arithmetic Logic Unit
4. Input/Output

## Flynn's Classical Taxonomy

### SISD SIMD

Single Instruction stream, Single Data stream

Single Instruction stream, Multiple Data stream

### MISD MIMD

Multiple Instruction stream, Single Data stream

Multiple Instruction stream, Multiple Data stream

<img width="964" alt="image" src="https://user-images.githubusercontent.com/31528604/145530426-ffaf733a-9fcd-497f-ae63-b87031f6b7d3.png">

<img width="896" alt="image" src="https://user-images.githubusercontent.com/31528604/145530492-3ca918ae-a99c-48e4-8ee3-0473507f8786.png">

## Parallel Computation 
Shared Memory

## Distributed Computation 
Distributed Memory -> Message Passing

## Hybrid Distributed-Shared Memory

<img width="1203" alt="image" src="https://user-images.githubusercontent.com/31528604/145535348-5734b6fe-4b23-4099-bb5e-538a9c459a2a.png">

<img width="1041" alt="image" src="https://user-images.githubusercontent.com/31528604/145535499-9b792cc6-1b27-408d-9658-fe0de4db6e00.png">

1. Understand the Problem - hotspots, bottlenecks
2. Communications - embarrassingly parallel
3. Data Dependencies
4. Load Balancing
5. Input/Output (I/O)

