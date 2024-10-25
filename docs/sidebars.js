/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: [
        'get_started/introduction',
        'get_started/Setup',
        'get_started/Flash_device',
        {
          type: 'category',
          label: 'Backend',
          items: [
            'get_started/backend/Backend_Setup',
            'get_started/backend/backend_deepdive',
            'get_started/backend/StoringMemory',
            'get_started/backend/transcription',
            'get_started/backend/memory_embeddings',
            'get_started/backend/postprocessing'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Assembly',
      items: [
        'assembly/Buying_Guide',
        'assembly/Build_the_device',
        'assembly/Compile_firmware',
        'assembly/Install_firmware',
        'assembly/audio_test'
      ]
    },
    {
      type: 'category',
      label: 'Developer',
      items: [
        {
          type: 'category',
          label: 'Apps',
          items: [
            'developer/apps/Introduction',
            'developer/apps/PromptBased',
            'developer/apps/Integrations',
            'developer/apps/audiostreaming',
            'developer/apps/Submitting',
          ]
        },
        'developer/HowItWorks',
        'developer/Protocol',
        'developer/Contribution',
        'developer/savingaudio',
        'developer/AudioStreaming',
        'developer/DevKit2Testing'
      ]
    },
    {
      type: 'category',
      label: 'Hardware',
      items: [
        'hardware/DevKit1',
        'hardware/DevKit2',
        'hardware/OpenGlass'
      ]
    },
    {
      type: 'category',
      label: 'More',
      items: [
        'more/ZapierIntegration',
        'more/OpenGlass'
      ]
    },
    {
      type: 'category',
      label: 'Info',
      items: [
        'info/Support',
        'info/License',
        'info/Disclaimer',
        'info/Privacy',
        {
          type: 'category',
          label: 'Archive',
          items: [
            'info/archive/launch'
          ]
        }
      ]
    }
  ],
   
};

export default sidebars;
