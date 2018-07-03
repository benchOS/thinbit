# ThinBit
[![benOSShield-Official](https://img.shields.io/badge/benOS-Native-brightgreen.svg)](https://github.com/benchOS/benOS)[![benOSShield-Utils](https://img.shields.io/badge/benOS-Utils-brightgreen.svg)](https://github.com/benchOS/benOS)[![build status](http://img.shields.io/travis/benchOS/thinbit.svg?style=flat)](http://travis-ci.org/benchOS/thinbit)[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![benOSRepoHeader](https://raw.githubusercontent.com/benchOS/benchOS-design/master/repo-headers/benos-thinbit-header.png)](https://github.com/benchOS/thinbit)
<br>

ThinBit is a high-level `Bitfield` implementation that allocates a series of 1kb
buffers to support very thin `bitfields` without having to suffocate from the
cost of dealing with massive buffers.


## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Related Projects](#related-projects)
- [Why Decentralized Internet](#why-the-internet-must-have-a-decentralized-alternative)
- [Bench On The dWeb](#bench-on-the-dweb)
- [License](#license)
- [Copyright](#license)

## Background
ThinBit is a high-level `Bitfield` implementation that allocates a series of 1kb buffers to support very thin `bitfields`
without having to suffocate from the cost of dealing with massive buffers. If you want to simple implementation of a flat bitfield
see the [bitfield](https://github.com/fb55/bitfield) module. ThinBit is used for big `bitfields` where every single bit isn't truly needed and we are able to thin the frame.

[![benOSRepoHeader](https://raw.githubusercontent.com/benchOS/benchOS-design/master/terminal-screens/thinbit.png)](https://github.com/benchOS/thinbit)


## Installation

### With NPM

```
npm install thinbit

```
### With YARN

```
yarn add global thinbit
```

## Usage

``` js
var thinbit = require('thinbit')
var tbits = thinbit()

tbits.set(0, true) // set first bit
tbits.set(1, true) // set second bit
tbits.set(1000000000000, true) // set the 1.000.000.000.000th bit
```

Running the above example will allocate two 1kb buffers internally.
Each 1kb buffer can hold information about 8192 bits so the first one will be
used to store information about the first two bits and the second will be used
to store the 1.000.000.000.000th bit.

**NOTE:** ***The above was written by the developers of the BitField libraries.***

## API

#### `var tbits = thinbit([options])`

Create a new thinbit. Options include

``` js
{
  pageSize: 1024, // how big should the partial buffers be
  buffer: anExistingBitfield,
  trackUpdates: false // track when pages are being updated in the pager
}
```

#### `tbits.set(index, value)`

Set a bit to true or false.

#### `tbits.get(index)`

Get the value of a bit.

#### `var buffer = tbits.toBuffer()`

Get a single buffer representing the entire thinbit.

## Related Projects
- [benOS](https://github.com/benchOS/benOS) - benOS Decentralized Operating System
- [benny](https://github.com/benchOS/dpack-logger) - benOS Native Container Builder
- [bennyfile](https://github.com/distributedweb/bennyfile) - Build File Library For Benny Containers
- [thinbit](https://github.com/distributedweb/buffgap) - BitField Library For Benny

## Why The Internet Must Have A Decentralized Alternative
Today, the internet is more censored than ever and it's only getting worse. Our mission with the [dWeb Protocol](https://github.com/distributedweb/dweb) was to create a truly powerful P2P protocol, around [benOS](https://github.com/benchOS/benos), [dBrowser](https://github.com/benchOS/dbrowser) and many of benOS' underlying libraries to bring the most powerful P2P products to life. In the last few months, by rebuilding P2P technologies that have existed since the early 2000s, we have built a powerful suite of decentralized libraries for benOS and the Bench Network, that will only improve over time. But we also brought new ideas to life, like:

- [dDrive](https://github.com/distributedweb/ddrive)
- [dExplorer](https://github.com/distributedweb/dexplorer)
- [dDatabase](https://github.com/distributedweb/ddatabase)
- [dSites](https://github.com/distributedweb/dsites)
- [dPack](https://github.com/distributedweb/dpack)
- [benFS](https://github.com/benchOS/benfs)
- [DCDN](https://github.com/distributedweb/dcdn)
- [Rocketainer](https://github.com/distributedweb/rocketainer)
- [RocketOS](https://github.com/distributedweb/rocketos)
- [dNames](https://github.com/distributedweb/dnames)
- [P2PDNS](https://github.com/distributedweb/p2pdns)
- [dWebFS](https://github.com/distributedweb/dwebfs)
- [dWebDB](https://github.com/distributedweb/dwebdb)
- [MeteorIDE](https://github.com/distributedweb/meteorIDE)
- [Kepler](https://github.com/benchlab/kepler)
- [Neutron](https://github.com/benchlab/neutron)
- [Designate](https://github.com/benchlab/designate)
- [Nova](https://github.com/benchlab/nova)

and more! These were the protocols and libraries that we needed to create a completely decentralized operating system, where everything was distributed, protected and people were once again in control of their data. benOS is made up of over 1100+ different libraries that we are releasing on a day-by-day basis as we move them to a stable/production state. While financial support is great for this open source project, we need developers who want to be some of the first to build the `dApps` and `dSites` of the future. We have to take back what our forefathers originally designed for freedom, by making our code the law, instead of releasing weak and highly centralized applications where law cannot be applied because the code lacks the foundation to implement a legal framework for itself. Join us for a truly historic journey on the [BenchLabs Telegram](https://t.me/benchlabs). See you there.

### Bench On The dWeb
[dweb://bench.dnames.io](dweb://bench.dnames.io) // dNames Short Link
[dweb://3EDAE09848B77401445B7739CAFCE442DDE1752AED63025A1F94E6A86D7E9F04](dweb://3EDAE09848B77401445B7739CAFCE442DDE1752AED63025A1F94E6A86D7E9F04) // dWeb Key Link

In order to make the links above clickable or to view these links period, you will need [dBrowser](https://github.com/benchOS/dbrowser) (Available for Mac OSX, Linux, Windows and soon to be available on iOS/Android)

#### "The Code Is The Law" - Stan Larimer - Godfather of BitShares.

## License
[MIT](LICENSE.md)
<br><br>
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
<br>
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://js.distributedwebs.org)
<br>
[![dWebShield](https://github.com/benchlab/dweb-shields/blob/master/shields/dweb-protocol-shield.svg)](https://github.com/distributedweb/dweb)

## Copyright
Copyright (c) 2018 Bench Open Systems. All rights reserved.
