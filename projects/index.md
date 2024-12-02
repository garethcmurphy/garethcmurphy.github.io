---
layout: page
title: Projects
permalink: /projects/
---

### [Mapping dust extinction in the galactic plane](https://github.com/garethcmurphy/galactic-plane-map)

This C++ project aims to map dust extinction in the Galactic Plane using the Wolf star count method and the 2MASS catalog. It processes 2MASS data, counts stars in specific magnitude bins, compares observed and expected counts to derive extinction values, and visualizes the results in a 2D map. The project can be enhanced by incorporating color excess, considering stellar density variations, and implementing statistical error analysis.

### [Unleash the Fury: Simulating Jets and Supernovae with Cutting-Edge MHD Code](https://github.com/garethcmurphy/mpi-mhd-fv)

This code isn't your dusty attic relic – it's a powerhouse for simulating the most explosive events in the cosmos: **jets** and **supernovae**! Originally built to tame these celestial tantrums, it's been upgraded for the modern era with 64-bit precision for handling massive datasets.

**Here's the tech powering the simulation:**

- **HDF5**: Forget clunky data storage, this code uses HDF5, a format compatible with popular visualization tools like Matlab and IDL. Now you can turn your simulation into stunning visuals.
- **MPI**: Teamwork makes the dream work! This code utilizes MPI for seamless communication between processors, allowing you to tackle even the most complex simulations with ease.
- **Godunov's Scheme**: This sophisticated numerical method captures the shockwaves that erupt during these cosmic explosions with pinpoint accuracy. Imagine a second-order equation of state keeping track of every twist and turn!
- **Riemann Solver Powerhouse**: Choose your weapon! This code offers multiple approximate Riemann solvers, including Roe, HLLD, and Lax-Friedrichs, to tackle different types of cosmic phenomena.

**Ready to witness the universe unfold? This code is your key to unlocking the secrets of jets and supernovae!**

### [FPGA-filters](https://github.com/garethcmurphy/fpga-filters)

A common design problem in digital signal processing is electronic noise in speech signals. The hardware for a basic noise filter for speech can be most conveniently implemented on a field programmable gate array (FPGA). Such a device allows the user to simulate a hardware design in real time: to test, alter and debug it in the space of a few hours without the cost associated with silicon microchip manufacture.
The aim of the project was to develop various filters for noisy speech signals, and to investigate the trade-off between power consumption, performance and FPGA gate usage. Finite impulse response filters were developed in Matlab and implemented on the FPGA.
The Verilog language describes the functionality of digital logic hardware. It is used for simulation of digital circuits and for realisation of digital circuits on FPGAs. The code provides a description of logic at behavioural level. This means for example, that an arithmetical function can be specified directly (e.g. multiplication, x = a \* b) without the need for each actual gate to be specified by the user. The actual gates are produced as a netlist (the logic is "synthesised") by the software. Not all Verilog constructs can be synthesised, either because they are impossible for a chip (e.g. displaying to screen), illegal (e.g. storing two values in the same register) or simply due to lack of space on the chip (e.g. a 20-bit 8-tap digital filter).

## [PyViz](https://github.com/garethcmurphy/pyviz)

A collection of python scripts to read simulation data from snoopy, pluto etc, into Visit Visualisation Tool and plot the vorticity, draw streamlines, magnetic field lines and plot anisotropy stress tensors.
