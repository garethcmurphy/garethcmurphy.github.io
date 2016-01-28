---
layout: page
title: Projects
permalink: /projects/
---


### [MPI-MHD-FV](https://github.com/garethcmurphy/mpi-mhd-fv)

MHD code to simulate jets and supernovae.
This project is an old MHD code, written originally to simulate jets and outflows.
Updated to use 64-bit addresses for pointers.
It depends on [HDF5](https://www.hdfgroup.org) for data storage, which is compatible with many visualisation tools (Matlab, IDL etc).
[MPI](http://www.mpi-forum.org) is used to communicate between processors.
The numerical method used is a second-order Godunov, shock capturing, finite volume scheme with an adiabatic equation of state.
The Riemann problem is solved to calculate the flux of mass, momentum and energy at cell interfaces. Roe, HLLD, or Lax-Friedrichs approximate Riemann solvers are all implemented.


### [FPGA-filters](https://github.com/garethcmurphy/fpga-filters)


Verilog code to set up digital filters on Xilinx chip.
FIR and IIR filters.
