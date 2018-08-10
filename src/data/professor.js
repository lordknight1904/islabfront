import recruitPDF from '../data/recruit.pdf';
import curriculumVitaePDF from '../data/cv_bshim.pdf';

const professor = {
  name: 'Byonghyo Shim',
  title: 'Professor',
  university: {
    name: 'Seoul National University',
    department: 'Dept. of Electrical and Computer Engineering',
    URL: 'http://en.snu.ac.kr/',
  },
  lab: {
    name: 'Information System Laboratory',
    title: 'Director',
  },
  workAddress: '509 Bldg. 301, Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul, 151-744, Korea',
  office: '509 Bldg. 301, SNU',
  phone: '+82-2-880-8407',
  email: 'bshim@snu.ac.kr',

  description: 'In this semester (Spring 2018), I am teaching Random Signal Theory (430.523) and Signal and Systems (430.306).',
  recruit: recruitPDF,
  bio: 'Byonghyo Shim received the B.S. and M.S. degree in Control and Instrumentation Engineering (currently Electrical Eng.) from Seoul National University (SNU), Seoul, Korea, in 1995 and 1997, respectively, and the M.S. degree in Mathematics and the Ph.D. degree in Electrical and Computer Engineering from the University of Illinois at Urbana-Champaign (UIUC), Urbana, in 2004 and 2005, respectively. From 1997 and 2000, he was with the Department of Electronics Engineering at the Korean Air Force Academy as an Officer (First Lieutenant) and an Academic Full-time instructor. He also had a short time research position in the DSP group of LG Electronics and DSP R&D Center, Texas Instruments Incorporated, Dallas, TX, in 1997 and 2004, respectively. From 2005 to 2007, he was with the Qualcomm Inc., San Diego, CA as a Senior/Staff Engineer working on CDMA systems. From 2007 to 2014, he was with the School of Information and Communication, Korea University, Seoul, Korea, as an assistance and associate professor. Since September 2014, he has been with the Dept. of Electrical and Computer Engineering, Seoul National University, where he is currently a Professor. His research interests include signal processing for wireless communications, statistical signal processing, estimation and detection, compressed sensing and matrix completion, and information theory. Dr. Shim was the recipient of the M. E. Van Valkenburg Research Award from the ECE Department of the University of Illinois (2005), Hadong Young Engineer Award from IEIE (2010), and Irwin Jacobs Award from Qualcomm and KICS (2016). He is a senior member of IEEE, a technical committee member of Signal Processing for Communications and Networking (SPCOM), an associate editor of IEEE Transactions on Signal Processing (TSP), IEEE Transactions on Communications (TCOM), IEEE Wireless Communications Letters (WCL), Journal of Communications and Networks (JCN), and a guest editor of IEEE Journal of Selected Areas in Communications (location awareness for radios and networks).',
  curriculumVitae: curriculumVitaePDF,
};

export default professor;