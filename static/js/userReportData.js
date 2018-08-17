var userReportData = {
  optIn: {
    title: 'Opt in',
    labels: ['Opt-in', 'Opt-out'],
    dataset: [65.02, 34.98],
  },
  realOrVirtual: {
    title: 'Real or Virtual Machine?',
    labels: ['Physical', 'VM', 'Unknown'],
    dataset: [42.84, 20.20, 36.97],
  },
  firmware: {
    title: 'Firmware',
    labels: ['BIOS', 'EFI'],
    dataset: [72.87, 37.13],
  },
  osArchitecture: {
    title: 'OS Architecture',
    labels: ['amd64', 'i386'],
    dataset: [99, 1],
  },
  displayServer: {
    title: 'Display Server',
    labels: ['X11', 'Wayland'],
    dataset: [99, 1],
  },
  numberScreens: {
    title: 'Number of screens',
    labels: ['One', 'Two', 'Three'],
    dataset: [93, 5, 2],
  },
  numberGPUs: {
    title: 'Number of GPUs',
    labels: ['One', 'Two', 'Three'],
    dataset: [87, 10, 3],
  },
  screenSizes: {
    title: 'Popular screen sizes',
    dataset: [
      {
        label: '800x600',
        value: 256110,
      }, {
        label: '1024x768',
        value: 86040,
      }, {
        label: '1152x768',
        value: 46550,
      }, {
        label: '1152x864',
        value: 25880,
      }, {
        label: '1280x1024',
        value: 80030,
      }, {
        label: '1280x800',
        value: 50430,
      }, {
        label: '1360x768',
        value: 36250,
      }, {
        label: '1366x768',
        value: 582440,
      }, {
        label: '1440x900',
        value: 65790,
      }, {
        label: '1600x900',
        value: 103410,
      }, {
        label: '1680x1050',
        value: 169550,
      }, {
        label: '1920x1080',
        value: 672440,
      }, {
        label: '1920x1200',
        value: 42560,
      }, {
        label: '2560x1440',
        value: 33170,
      }, {
        label: '3840x2160',
        value: 32360,
      }
    ]
  },
  physicalDisk: {
    title: 'Physical disk',
    dataset: [
      {
        label: '<30GB',
        value: 255272,
      }, {
        label: '30-99GB',
        value: 154609,
      }, {
        label: '100-249GB',
        value: 211407,
      }, {
        label: '250-499GB',
        value: 168307,
      }, {
        label: '500-999GB',
        value: 93231,
      }, {
        label: '>1TB',
        value: 19886,
      },
    ]
  },
  CPUs: {
    title: 'Number of CPUs',
    dataset: [
      {
        label: '1-3',
        value: 1876800,
      }, {
        label: '4-6',
        value: 282800,
      }, {
        label: '8+',
        value: 93200,
      },
    ]
  },
  RAM: {
    title: 'Size of RAM (GB)',
    dataset: [
      {
        label: '1-4',
        value: 1199820,
      }, {
        label: '5-8',
        value: 681390,
      }, {
        label: '12-24',
        value: 305400,
      }, {
        label: '32+',
        value: 61020,
      },
    ]
  },
  pixelDensity: {
    title: 'Pixel density',
    dataset: [
      {
        label: '120',
        value: 413120,
      }, {
        label: '160',
        value: 68110,
      }, {
        label: '240+',
        value: 14560,
      }, 
    ]
  },
  partitionType: {
    title: 'Partition type',
    dataset: [
      {
        label: 'Erase existing and reinstall',
        value: 40,
      }, {
        label: 'Manual',
        value: 30,
      }, {
        label: 'Install alongside',
        value: 17,
      }, {
        label: 'Erase device and install',
        value: 16,
      }, {
        label: 'Logical Volume Manager (LVM)',
        value: 8,
      }, {
        label: 'Encrypted LVM',
        value: 6,
      }, {
        label: 'Upgrade',
        value: 3,
      }, 
    ]
  },
  partitionSize: {
    title: 'Size of partitions',
    dataset: [
      {
        label: '<1GB',
        value: 35,
      }, {
        label: '1-19GB',
        value: 17,
      }, {
        label: '20-49GB',
        value: 14,
      }, {
        label: '50-99GB',
        value: 13,
      }, {
        label: '100-249GB',
        value: 25,
      }, {
        label: '250-999GB',
        value: 20,
      }, {
        label: '1TB+',
        value: 15,
      },
    ]
  },
  partitionNum: {
    title: 'Number of partitions',
    dataset: [
      {
        label: '1',
        value: 36,
      }, {
        label: '2',
        value: 40,
      }, {
        label: '3',
        value: 18,
      }, {
        label: '4+',
        value: 5,
      },
    ]
  },
  defaultSettings: {
    dataset: [
      {
        label: 'true',
        value: 310,
      }, {
        label: 'false',
        value: 690,
      },
    ]
  },
  restrictAddOn: {
    dataset: [
      {
        label: 'true',
        value: 600,
      }, {
        label: 'false',
        value: 400,
      },
    ]
  },
  autoLogin: {
    dataset: [
      {
        label: 'true',
        value: 290,
      }, {
        label: 'false',
        value: 710,
      },
    ]
  },
  minimalInstall: {
    dataset: [
      {
        label: 'true',
        value: 130,
      }, {
        label: 'false',
        value: 870,
      },
    ]
  },
  updateAtInstall: {
    dataset: [
      {
        label: 'true',
        value: 920,
      }, {
        label: 'false',
        value: 80,
      },
    ]
  },
};
