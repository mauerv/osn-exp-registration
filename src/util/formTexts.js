const texts = {
  categories: ['Study Information', 'Sampling Plan', 'Variables', 'Design Plan', 'Analysis Plan', 'Other'],
  items: [
    {
      category: 'Study Information',
      elements: [
        {
          title: 'Title',
          description: 'Provide the working title of your study. It is helpful if this is the same title that you submit for publication of your final manuscript, but it is not a requirement.',
          required: true,
          formField: 'title'
        },
        {
          title: 'Authors',
          description: 'The author who submits the preregistration is the recipient of the award money and must also be an author of the published manuscript. Additional authors may be added or removed at any time.',
          required: true,
          formField: 'authors'
        },
        {
          title: 'Research Questions',
          description: 'Please list each research question included in this study.',
          required: true,
          formField: 'researchQuestions'
        },
        {
          title: 'Hypotheses',
          description: 'For each of the research questions listed in the previous section, provide one or multiple specific and testable hypotheses. Please state if the hypotheses are directional or non-directional. If directional, state the direction. A predicted effect is also appropriate here.',
          required: true,
          formField: 'hypotheses'
        }
      ]
    },
    {
      category: 'Sampling Plan',
      elements: [
        {
          title: 'Existing Data',
          description: 'Preregistration is designed to make clear the distinction between confirmatory tests, specified prior to seeing the data, and exploratory analyses conducted after observing the data. Therefore, creating a research plan in which existing data will be used presents unique challenges.',
          required: true,
          formField: 'existingData'
        },
        {
          title: 'Explanation of existing data',
          description: 'If you indicate that you will be using some data that already exist in this study, please describe the steps you have taken to assure that you are unaware of any patterns or summary statistics in the data. This may include an explanation of how access to the data has been limited, who has observed the data, or how you have avoided observing any analysis of the specific data you will use in your study. The purpose of this question is to assure that the line between confirmatory and exploratory analysis is clear.',
          required: true,
          formField: 'dataExplanation'
        },
        {
          title: 'Data collection procedures',
          description: 'Please describe the process by which you will collect your data. If you are using human subjects, this should include the population from which you obtain subjects, recruitment efforts, payment for participation, how subjects will be selected for eligibility from the initial pool (e.g. inclusion and exclusion rules), and your study timeline. For studies that don’t include human subjects, include information about how you will collect samples, duration of data gathering efforts, source or location of samples, or batch numbers you will use.',
          required: true,
          formField: 'dataCollectionProcedures'
        },
        {
          title: 'Sample size',
          description: 'Describe the sample size of your study. How many units will be analyzed in the study? This could be the number of people, birds, classrooms, plots, interactions, or countries included. If the units are not individuals, then describe the size requirements for each unit. If you are using a clustered or multilevel design, how many units are you collecting at each level of the analysis?',
          required: true,
          formField: 'sampleSize'
        },
        {
          title: 'Sample size rationale',
          description: 'This could include a power analysis or an arbitrary constraint such as time, money, or personnel.',
          required: true,
          formField: 'sampleSizeRationale'
        },
        {
          title: 'Stopping rule',
          description: 'If your data collection procedures do not give you full control over your exact sample size, specify how you will decide when to terminate your data collection.',
          required: true,
          formField: 'stoppingRule'
        }
      ]
    },
    {
      category: 'Variables',
      elements: [
        {
          title: 'Manipulated variables',
          description: 'Describe all variables you plan to manipulate and the levels or treatment arms of each variable. For observational studies and meta-analyses, simply state that this is not applicable.',
          required: true,
          formField: 'manipulatedVariables'
        },
        {
          title: 'Measured variables',
          description: 'Describe each variable that you will measure. This will include outcome measures, as well as any predictors or covariates that you will measure. You do not need to include any variables that you plan on collecting if they are not going to be included in the confirmatory analyses of this study.',
          required: true,
          formField: 'measuredVariables'
        },
        {
          title: 'Indices',
          description: 'If any measurements are  going to be combined into an index (or even a mean), what measures will you use and how will they be combined? Include either a formula or a precise description of your method. If your are using a more complicated statistical method to combine measures (e.g. a factor analysis), you can note that here but describe the exact method in the analysis plan section.',
          required: true,
          formField: 'indices'
        },
      ]
    },
    {
      category: 'Design Plan',
      elements: [
        {
          title: 'Study type',
          description: 'Please check one of the following statements',
          required: true,
          formField: 'studyType'
        },
        {
          title: 'Blinding',
          description: 'Blinding describes who is aware of the experimental manipulations within a study. Mark all that apply.',
          required: true,
          formField: 'blinding'
        },
        {
          title: 'Study design',
          description: 'Describe your study design. Examples include two-group, factorial, randomized block, and repeated measures. Is it a between (unpaired), within-subject (paired), or mixed design? Describe any counterbalancing required. Typical study designs for observation studies include cohort, cross sectional, and case-control studies. ',
          required: true,
          formField: 'studyDesign'
        },
        {
          title: 'Randomization',
          description: 'If you are doing a randomized study, how will you randomize, and at what level? ',
          required: true,
          formField: 'randomization'
        },
      ]
    },
    {
      category: 'Analysis Plan',
      elements: [
        {
          title: 'Statistical models',
          description: 'What statistical model will you use to test each hypothesis? Please include the type of model (e.g. ANOVA, multiple regression, SEM, etc) and the specification of the model (this includes each variable that will be included as predictors, outcomes, or covariates). Please specify any interactions that will be tested and remember that any test not included here must be noted as an exploratory test in your final article.',
          required: true,
          formField: 'statisticalModels'
        },
        {
          title: 'Transformations',
          description: 'If you plan on transforming, centering, recoding the data, or will require a coding scheme for categorical variables, please describe that process.',
          required: true,
          formField: 'transformations'
        },
        {
          title: 'Follow-up analyses',
          description: 'If not specified previously, will you be conducting any confirmatory analyses to follow up on effects in your statistical model, such as subgroup analyses, pairwise or complex contrasts, or follow-up tests from interactions? Remember that any analyses not specified in this research plan must be noted as exploratory.',
          required: true,
          formField: 'followUpAnalyses'
        },
        {
          title: 'Inference criteria',
          description: 'What criteria will you use to make inferences? Please describe the information you’ll use (e.g. specify the p-values, Bayes factors, specific model fit indices), as well as cut-off criterion, where appropriate. Will you be using one or two tailed tests for each of your analyses? If you are comparing multiple conditions or testing multiple hypotheses, will you account for this? ',
          required: true,
          formField: 'inferenceCriteria'
        },
        {
          title: 'Data exclusion',
          description: 'How will you determine which data points or samples (if any) to exclude from your analyses? How will outliers be handled?',
          required: true,
          formField: 'dataExclusion'
        },
        {
          title: 'Missing data',
          description: 'How will you deal with incomplete or missing data?',
          required: true,
          formField: 'missingData'
        },
        {
          title: 'Exploratory analysis',
          description: 'If you plan to explore your data set to look for unexpected differences or relationships, you may describe those tests here. An exploratory test is any test where a prediction is not made up front, or there are multiple possible tests that you are going to use. A statistically significant finding in an exploratory test is a great way to form a new confirmatory hypothesis, which could be registered at a later time.',
          required: true,
          formField: 'exploratoryAnalysis'
        },
      ]
    },
    {
      category: 'Other',
      elements: [
        {
          title: 'Other',
          description: 'If there is any additional information that you feel needs to be included in your preregistration, please enter it here.',
          required: true,
          formField: 'other'
        },
      ]
    }
  ]
}

export default texts
