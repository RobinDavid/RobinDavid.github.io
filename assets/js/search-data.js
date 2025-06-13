// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-conferences",
          title: "Conferences",
          description: "Talks and workshops in industrial conferences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "dropdown-publication",
              title: "Publication",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-phd-advising-amp-jury",
              title: "PhD Advising &amp; Jury",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/phds/";
              },
            },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-public-reports",
          title: "Public Reports",
          description: "Public security assessment reports",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reports/";
          },
        },{id: "nav-trainings",
          title: "Trainings",
          description: "Trainings provided at various conferences (current and past ones).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/trainings/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Collection of current and past projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-github",
          title: "Github",
          description: "Github related projects and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-cves",
              title: "CVEs",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/cves/";
              },
            },{id: "dropdown-tech-magazine",
              title: "Tech Magazine",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tech-magazine/";
              },
            },{id: "post-our-pwn2own-journey-against-time-and-randomness-part-2-quarkslab-39-s-blog",
        
          title: 'Our Pwn2Own journey against time and randomness (part 2) - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Part 2 of a series about participation in the Pwn2Own Toronto 2023 contest.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/our-pwn2own-journey-against-time-and-randomness-part-2.html", "_blank");
          
        },
      },{id: "post-qbindiff-a-modular-diffing-toolkit-quarkslab-39-s-blog",
        
          title: 'QBinDiff: A modular diffing toolkit - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This blog post presents an overview of QBinDiff, the Quarkslab binary diffing tool officially released today. It describes its core principles and shows how it works on binaries as well as on general graph matching problems unrelated to IT security.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/qbindiff-a-modular-diffing-toolkit.html", "_blank");
          
        },
      },{id: "post-pastis-for-the-win-quarkslab-39-s-blog",
        
          title: 'PASTIS For The Win! - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "In this blog post we present PASTIS, a Python framework for ensemble fuzzing, developed at Quarkslab.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/pastis-for-the-win.html", "_blank");
          
        },
      },{id: "post-introducing-tritondse-a-framework-for-dynamic-symbolic-execution-in-python-quarkslab-39-s-blog",
        
          title: 'Introducing TritonDSE: A framework for dynamic symbolic execution in Python - Quarkslab&#39;s blog... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We present TritonDSE, a new tool by Quarkslab. TritonDSE is a Python library, built on top of Triton, that provides easy and customizable Dynamic Symbolic Execution capabilities for binary programs.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/introducing-tritondse-a-framework-for-dynamic-symbolic-execution-in-python.html", "_blank");
          
        },
      },{id: "post-our-pwn2own-journey-against-time-and-randomness-part-1-quarkslab-39-s-blog",
        
          title: 'Our Pwn2Own journey against time and randomness (part 1) - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A journey into the Pwn2Own contest. Part 1: Netgear RAX30 router WAN vulnerabilities",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/our-pwn2own-journey-against-time-and-randomness-part-1.html", "_blank");
          
        },
      },{id: "post-a-brief-overview-of-auditing-xcmv2-quarkslab-39-s-blog",
        
          title: 'A Brief Overview of Auditing XCMv2 - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Parity Tech mandated Quarkslab to audit XCM version 2 (XCMv2), a cross consensus communication mechanism. This messaging protocol is a cornerstone of the Polkadot ecosystem as it enables communications between chains on a network. This blog post summarizes few security aspects related to this technology and its implementation. The full audit report is available in PDF format at the end of this article.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/a-brief-overview-of-auditing-xcmv2.html", "_blank");
          
        },
      },{id: "post-audit-of-the-mimblewimble-integration-inside-litecoin-quarkslab-39-s-blog",
        
          title: 'Audit of the MimbleWimble Integration Inside Litecoin - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "The Litecoin Foundation mandated Quarkslab to audit the implementation of the MimbleWimble protocol in the Litecoin blockchain. This protocol acts as a sidechain in which privacy of the transactions is improved compared to the privacy on the classical chain.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/audit-of-the-mimblewimble-integration-inside-litecoin.html", "_blank");
          
        },
      },{id: "post-remote-denial-of-service-on-cyclonetcp-cve-2021-26788-quarkslab-39-s-blog",
        
          title: 'Remote Denial-of-Service on CycloneTCP : CVE-2021-26788 - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This post is a quick vulnerability report summary for a vulnerability we found while fuzzing the TCP/IP stack CycloneTCP.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/remote-denial-of-service-on-cyclonetcp-cve-2021-26788.html", "_blank");
          
        },
      },{id: "post-an-experimental-study-of-different-binary-exporters-quarkslab-39-s-blog",
        
          title: 'An Experimental Study of Different Binary Exporters - Quarkslab&#39;s blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This blog post presents a comparison between various disassembled binary exporters.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.quarkslab.com/an-experimental-study-of-different-binary-exporters.html", "_blank");
          
        },
      },{id: "news-slides-for-the-talk-at-re-verse-io-2025-are-available-here",
          title: 'Slides for the talk at RE//verse.io 2025, are available here.',
          description: "",
          section: "News",},{id: "news-talks-at-sstic-25-pyrrha-amp-amp-friends-diving-into-firmware-cartography",
          title: 'Talks at SSTIC’25: “Pyrrha &amp;amp;amp; Friends: Diving into Firmware Cartography”',
          description: "",
          section: "News",},{id: "news-upcoming-talks-at-recon-25-abusing-domestic-ev-chargers-through-bluetooth-and-usb",
          title: '[UPCOMING] Talks at Recon’25: “Abusing Domestic EV Chargers through Bluetooth and USB”',
          description: "",
          section: "News",},{id: "news-upcoming-paper-accepted-at-dimva-25-experimental-study-of-binary-diffing-resilience-on-obfuscated-programs",
          title: '[UPCOMING] Paper accepted at DIMVA’25: “Experimental Study of Binary Diffing Resilience on Obfuscated...',
          description: "",
          section: "News",},{id: "projects-android-aosp-cve-dataset",
          title: 'Android AOSP CVE Dataset',
          description: "Dataset provided vulnerable and fixed binaries for 1900 vulnerabilities in multiples architectures x64, ARM, Aarch64. Released in 2021.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aosp/";
            },},{id: "projects-diffing-portal",
          title: 'Diffing Portal',
          description: "Portal that aggregate various diffing related resources.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diffing_portal/";
            },},{id: "projects-obfuscation-diffing-dataset",
          title: 'Obfuscation Diffing Dataset',
          description: "Dataset made of plain programs and obfuscated variants. Obfuscator used is OLLVM and Tigress. Released in 2024.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/obfu_diff/";
            },},{id: "projects-pastis",
          title: 'PASTIS',
          description: "Collaborative Ensemble Fuzzing Framework",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pastis/";
            },},{id: "projects-python-bindiff",
          title: 'python-bindiff',
          description: "Python API to generate and to manipulate Bindiff diffs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/python_bindiff/";
            },},{id: "projects-qbindiff",
          title: 'QBinDiff',
          description: "Experimental binary diffing tool addressing the diffing as a Network Alignement Quadratic Problem.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qbindiff/";
            },},{id: "projects-mba-obfuscated-functions",
          title: 'MBA Obfuscated Functions',
          description: "Dataset of obfuscated functions by Tigress, with MBAs and virtualization. Released in 2019.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qsynth/";
            },},{id: "projects-tritondse",
          title: 'TritonDSE',
          description: "Triton-based DSE library with Whitebox Fuzzing Capabilities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tritondse/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.uni-trier.de/pid/162/3665.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%65%76.%72%6F%62%69%6E.%64%61%76%69%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RobinDavid", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/robin-david-17304685", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-8214-875X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=k-14d30AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/RobinDavid1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
