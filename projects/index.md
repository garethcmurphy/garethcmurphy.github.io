---
layout: page
title: Projects
permalink: /projects/
---

### [Mapping dust extinction in the galactic plane](https://github.com/garethcmurphy/galactic-plane-map)

C++ code to map dust extinction in the Galactic Plane, using the Wolf star count method, and 2MASS catalogue data.

### [MPI-MHD-FV](https://github.com/garethcmurphy/mpi-mhd-fv)

MHD code to simulate jets and supernovae.
This project is an old MHD code, written originally to simulate jets and outflows.
Updated to use 64-bit addresses for pointers.
It depends on [HDF5](https://www.hdfgroup.org) for data storage, which is compatible with many visualisation tools (Matlab, IDL etc).
[MPI](http://www.mpi-forum.org) is used to communicate between processors.
The numerical method used is a second-order Godunov, shock capturing, finite volume scheme with an adiabatic equation of state.
The Riemann problem is solved to calculate the flux of mass, momentum and energy at cell interfaces. Roe, HLLD, or Lax-Friedrichs approximate Riemann solvers are all implemented.


### [FPGA-filters](https://github.com/garethcmurphy/fpga-filters)


A common design problem in digital signal processing is electronic noise in speech signals. The hardware for a basic noise filter for speech can be most conveniently implemented on a field programmable gate array (FPGA). Such a device allows the user to simulate a hardware design in real time: to test, alter and debug it in the space of a few hours without the cost associated with silicon microchip manufacture.
	The aim of the project was to develop various filters for noisy speech signals, and to investigate the trade-off between power consumption, performance and FPGA gate usage. Finite impulse response filters were developed in Matlab and implemented on the FPGA. 
    The Verilog language describes the functionality of digital logic hardware. It is used for simulation of digital circuits and for realisation of digital circuits on FPGAs. The code provides a description of logic at behavioural level. This means for example, that an arithmetical function can be specified directly (e.g. multiplication, x = a * b) without the need for each actual gate to be specified by the user. The actual gates are produced as a netlist (the logic is "synthesised") by the software. Not all Verilog constructs can be synthesised, either because they are impossible for a chip (e.g. displaying to screen), illegal (e.g. storing two values in the same register) or simply due to lack of space on the chip (e.g. a 20-bit 8-tap digital filter). 



## [PyViz](https://github.com/garethcmurphy/pyviz)


A collection of python scripts to read simulation data from snoopy, pluto etc, into Visit Visualisation Tool and plot the vorticity, draw streamlines, magnetic field lines and plot anisotropy stress tensors.
