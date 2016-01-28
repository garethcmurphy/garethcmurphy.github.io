---
layout: post
title:  "Posted mpi-mhd-fv code"
date:   2016-01-28 14:20:58 +0100
categories: jekyll update
---


Posted 2nd order  finite volume MHD code.
Written during 2005-2007 and full of messy expressions and strange variable names ...

Available now at this link 
[mpi-mhd-fv](https://github.com/garethcmurphy/mpi-mhd-fv)

{% highlight c++ %}
  a_star2 = (csound2 + bsquared);
  term = sqrt (a_star2 * a_star2 - 4 * csound2 * calfven2);
  cslow2 = 0.5 * (a_star2 - term);
  cfast2 = 0.5 * (a_star2 + term);
  cslow = sqrt (cslow2);
  cfast = sqrt (cfast2);
  eigenval[0] = u - cfast;
  eigenval[1] = u - calfven;
  eigenval[2] = u - cslow;
  eigenval[3] = u;
  eigenval[4] = u + cslow;
  eigenval[5] = u + calfven;
  eigenval[6] = u + cfast;
  return 0;
{% endhighlight %}

