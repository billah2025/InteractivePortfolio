export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.6
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.6
    }
  }
};

export const pageTransition = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};
