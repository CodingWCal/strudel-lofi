//CodingWCal - GitHub Strudel Lo Fi Beat
setcps(.39)
swing(.21)

let kick =
  s("bd ~ ~ ~ bd ~ ~ ")

let ghostKick =
  s("~ bd ~ ~ ~ bd ~ ~ ")
    .gain(.4)

let snare =
  stack(
    s("~ ~ sd ~ ~ ~ sd ~").gain(.7),
    s("~ ~ sd ~ ~ ~ sd ~").gain(.15).lpf(1200)
  )

let rim =
  s("~ ~ ~ ~ rim ~ ~ ~")
    .gain(.05)

let hats =
  s("hh*8")
    .gain(sine.range(.18,.28).slow(6))
    .hpf(3500)
    .late(sine.range(0,.015).slow(4))

let drums =
  stack(kick, snare, hats, ghostKick, rim)

let chords =
  note("<[f2,ab3,c4,eb4,ab4 f2*2] [db2,f3,ab3,c4, c4*4 db2*2] [ab2,c3,eb3,g3,c4,ab3 ab4*4] [c3,e3,g3,bb3] [ab3,c4,eb4,f4]>")
    .sound("piano")
    .slow(2)
    .room(.6)
    .delay(.22)
    .gain(.60)
    .lpf(sine.range(900,1400).slow(16))
    ._pianoroll()
let altChords =
  stack(
    note("<f3 db3 ab3 c4>")
      .sound("piano")
      .slow(2)
      .gain(.4),

    note("<[ab3,c4,eb4]*8 [f3,ab3,c4] [c4,eb4,g4]*8 [e4,g4,bb4]*2>")
      .sound("piano")
      .slow(2)
      .late(.126)
      .gain(.75)
  )
  .lpf(1200)
  .room(.4)
  ._pianoroll()


let bass =
  note("<~ f1 ab1 db1 ~ db1 c2 ~ ab1 ~ c2 db2>")
    .sound("bass")
    .slow(2)
    .lpf(350)
    .gain(.95)
    .late(.02)

let sub =
  note("<f0 ~ db0 ~ ab0 ~ c1 ~>")
    .sound("bass")
    .slow(2)
    .lpf(200)
    .gain(.4)


let arp =
  note("<f5 ab5*2 c6 eb6*8 ab5*2 c7*4>")
    .fast(2)
    .sound("piano")
    .gain(.60)
    .room(.4)
    .delay(.2)
    .lpf(1500)
    ._pianoroll()

let burst =
  note("<f7 f7 f7 eb7>")
    .fast(8)
    .sound("piano")
    .gain(.10)
    .room(.1)

let burst2 =
  note("<f4 ab3*4 c3 eb3 c3 ab4*2 eb4>")
    .fast(8)
    .sound("piano")
    .delay(.2)
    .gain(.10)
    .room(.1)
    ._pianoroll()

let topline =
  note("<c5 ~ eb5 ~ g5 ~ ab5 ~ ~ ~ ~ ~>")
    .sound("piano")
    .slow(2)
    .gain(.40)
    .room(.6)
    .delay(.25)
    ._pianoroll()

let texture =
  s("white")
    .gain(sine.range(.01,.03).slow(12))
    .hpf(6000)
    .slow(8)

let intro =
  stack(
    chords.gain(.3),
    texture
  )
let groove =
  stack(
    drums,
    bass,
    chords,
    texture
  )
let sparkle =
  stack(
    drums,
    bass,
    chords,
    altChords,
    topline,
    texture
  )

let drop =
  stack(
    drums,
    bass,
    sub,
    chords,
    arp,
    topline,
    burst.every(4, x => x),
    burst2.every(12, x => x),
    texture
  )

arrange(
  [4, intro],
  [8, groove],
  [8, sparkle],
  [8, drop]
)



