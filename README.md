Chartmaker
==============

Inspired by the numerous charting tools out there - including Datawrapper, Quartz's Chartbuilder and Philly's in-house tool.

Primarily built as a proof-of-concept (or skill, or lackthereof) and also because it was much simpler to build a Highcharts charting tool than to fork, troubleshoot and upgrade other tools available out there (especially Quartz's, since it's running D3 and D4 which I'm unfamiliar with).

This decision may return to bite my ass one day, but my rump is so scarred it's reminiscent of Deadpool's face anyway.


Project code
==============

Powered by Highcharts, Foundation for Sites, Papaparse and Underscore (not being used, yet).


Changelog
==============

v0.0.1 - Somewhat working.


Known issues
==============

This list is by no means exhaustive

* Form data destroyed upon csv data reload
* Chart options are not fully fleshed out (certain options disabled in the meantime)
* Tooltip not presenting thousand separator for data
* xAxis scales appropriately, but intervals cannot be defined yet
* No ability to export as HTML embed

Contributors
==============

* Jun-Kai Teoh (@jkteoh)
* Andrew Fraser (@andrewfraser) & Hoa Nguyen (@reporterhoa) for listening to my array issues