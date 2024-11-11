---
layout: post
title:  "A Verilog code for filtering on FPGAs"
date:   2002-01-25 22:20:58 +0100
categories: jekyll update
---




A common design problem in digital signal processing is electronic noise in speech signals. The hardware for a basic noise filter for speech can be most conveniently implemented on a field programmable gate array (FPGA). Such a device allows the user to simulate a hardware design in real time: to test, alter and debug it in the space of a few hours without the cost associated with silicon microchip manufacture. The aim of the project was to develop various filters for noisy speech signals, and to investigate the trade-off between power consumption, performance and FPGA gate usage. Finite impulse response filters were developed in Matlab and implemented on the FPGA. 

The Verilog language describes the functionality of digital logic hardware. It is used for simulation of digital circuits and for realisation of digital circuits on FPGAs. The code provides a description of logic at behavioural level. This means for example, that an arithmetical function can be specified directly (e.g. multiplication, x = a * b) without the need for each actual gate to be specified by the user. The actual gates are produced as a netlist (the logic is “synthesised”) by the software. Not all Verilog constructs can be synthesised, either because they are impossible for a chip (e.g. displaying to screen), illegal (e.g. storing two values in the same register) or simply due to lack of space on the chip (e.g. a 20-bit 8-tap digital filter).


git repository: [FPGA-filters](https://github.com/garethcmurphy/fpga-filters)
