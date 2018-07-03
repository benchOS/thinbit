var alloc = require('buffer-alloc')
var tape = require('tape')
var thinbit = require('./')

tape('ThinBit Tests: set and get', function (t) {
  var tbits = thinbit()

  t.same(tbits.get(0), false, 'first bit is false')
  tbits.set(0, true)
  t.same(tbits.get(0), true, 'first bit is true')
  t.same(tbits.get(1), false, 'second bit is false')
  tbits.set(0, false)
  t.same(tbits.get(0), false, 'first bit is reset')
  t.end()
})

tape('ThinBit Tests: set large and get', function (t) {
  var tbits = thinbit()

  t.same(tbits.get(9999999999999), false, 'large bit is false')
  tbits.set(9999999999999, true)
  t.same(tbits.get(9999999999999), true, 'large bit is true')
  t.same(tbits.get(9999999999999 + 1), false, 'large bit + 1 is false')
  tbits.set(9999999999999, false)
  t.same(tbits.get(9999999999999), false, 'large bit is reset')
  t.end()
})

tape('ThinBit Tests: get and set buffer', function (t) {
  var tbits = thinbit({trackUpdates: true})

  t.same(tbits.pages.get(0, true), undefined)
  t.same(tbits.pages.get(Math.floor(9999999999999 / 8 / 1024), true), undefined)
  tbits.set(9999999999999, true)

  var tbits2 = thinbit()
  var upd = tbits.pages.lastUpdate()
  tbits2.pages.set(Math.floor(upd.offset / 1024), upd.buffer)
  t.same(tbits2.get(9999999999999), true, 'bit is set')
  t.end()
})

tape('ThinBit Tests: toBuffer', function (t) {
  var tbits = thinbit()

  t.same(tbits.toBuffer(), alloc(0))

  tbits.set(0, true)

  t.same(tbits.toBuffer(), tbits.pages.get(0).buffer)

  tbits.set(9000, true)

  t.same(tbits.toBuffer(), Buffer.concat([tbits.pages.get(0).buffer, tbits.pages.get(1).buffer]))
  t.end()
})

tape('ThinBit Tests: pass in buffer', function (t) {
  var tbits = thinbit()

  tbits.set(0, true)
  tbits.set(9000, true)

  var clone = thinbit(tbits.toBuffer())

  t.same(clone.get(0), true)
  t.same(clone.get(9000), true)
  t.end()
})

tape('ThinBit Tests: set small buffer', function (t) {
  var buf = alloc(1)
  buf[0] = 255
  var tbits = thinbit(buf)

  t.same(tbits.get(0), true)
  t.same(tbits.pages.get(0).buffer.length, tbits.pageSize)
  t.end()
})
