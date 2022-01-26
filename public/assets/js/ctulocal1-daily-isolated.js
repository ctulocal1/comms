//
// AutoRun is called when page the body is loaded.

function autorun() {
  const lookup = document.getElementById("lookup"); 
  const dataDisplay = document.getElementById("dataOutput");
  const buttons = document.querySelector(".btn");
  const datePicker = document.getElementById("date");
  const dateLabel = document.querySelector("[for='date']");
  const progress = document.getElementById("queryOutput");
  datePicker.style.visibility = "hidden";
  dateLabel.style.visibility = "hidden";
  buttons.style.visibility = "hidden";
  let bySchool = [];
  lookup.addEventListener("click", async () => {
    let populations = [ { "id": 400009, "students": 407 }, { "id": 400011, "students": 396 }, { "id": 400013, "students": 303 }, { "id": 400017, "students": 106 }, { "id": 400021, "students": 478 }, { "id": 400022, "students": 620 }, { "id": 400023, "students": 438 }, { "id": 400024, "students": 559 }, { "id": 400025, "students": 611 }, { "id": 400026, "students": 379 }, { "id": 400027, "students": 453 }, { "id": 400028, "students": 396 }, { "id": 400029, "students": 509 }, { "id": 400030, "students": 526 }, { "id": 400031, "students": 608 }, { "id": 400032, "students": 156 }, { "id": 400033, "students": 1355 }, { "id": 400034, "students": 946 }, { "id": 400035, "students": 597 }, { "id": 400036, "students": 3 }, { "id": 400039, "students": 356 }, { "id": 400040, "students": 2 }, { "id": 400043, "students": 241 }, { "id": 400044, "students": 822 }, { "id": 400046, "students": 471 }, { "id": 400047, "students": 338 }, { "id": 400048, "students": 357 }, { "id": 400049, "students": 399 }, { "id": 400050, "students": 453 }, { "id": 400051, "students": 691 }, { "id": 400052, "students": 1031 }, { "id": 400053, "students": 641 }, { "id": 400054, "students": 997 }, { "id": 400055, "students": 627 }, { "id": 400056, "students": 378 }, { "id": 400057, "students": 958 }, { "id": 400058, "students": 317 }, { "id": 400059, "students": 459 }, { "id": 400060, "students": 340 }, { "id": 400061, "students": 497 }, { "id": 400062, "students": 272 }, { "id": 400064, "students": 376 }, { "id": 400066, "students": 361 }, { "id": 400068, "students": 171 }, { "id": 400069, "students": 376 }, { "id": 400071, "students": 419 }, { "id": 400075, "students": 475 }, { "id": 400076, "students": 337 }, { "id": 400077, "students": 668 }, { "id": 400079, "students": 519 }, { "id": 400080, "students": 498 }, { "id": 400081, "students": 256 }, { "id": 400082, "students": 397 }, { "id": 400083, "students": 209 }, { "id": 400084, "students": 271 }, { "id": 400085, "students": 654 }, { "id": 400086, "students": 257 }, { "id": 400089, "students": 542 }, { "id": 400091, "students": 437 }, { "id": 400092, "students": 278 }, { "id": 400094, "students": 568 }, { "id": 400096, "students": 840 }, { "id": 400097, "students": 1228 }, { "id": 400098, "students": 1005 }, { "id": 400101, "students": 447 }, { "id": 400104, "students": 557 }, { "id": 400105, "students": 355 }, { "id": 400106, "students": 440 }, { "id": 400107, "students": 391 }, { "id": 400111, "students": 451 }, { "id": 400112, "students": 496 }, { "id": 400113, "students": 10 }, { "id": 400114, "students": 217 }, { "id": 400115, "students": 533 }, { "id": 400116, "students": 331 }, { "id": 400117, "students": 449 }, { "id": 400118, "students": 289 }, { "id": 400119, "students": 251 }, { "id": 400120, "students": 481 }, { "id": 400121, "students": 558 }, { "id": 400123, "students": 131 }, { "id": 400124, "students": 112 }, { "id": 400125, "students": 120 }, { "id": 400126, "students": 99 }, { "id": 400127, "students": 53 }, { "id": 400128, "students": 106 }, { "id": 400129, "students": 108 }, { "id": 400130, "students": 72 }, { "id": 400131, "students": 119 }, { "id": 400133, "students": 312 }, { "id": 400134, "students": 140 }, { "id": 400135, "students": 158 }, { "id": 400136, "students": 84 }, { "id": 400137, "students": 94 }, { "id": 400139, "students": 266 }, { "id": 400141, "students": 183 }, { "id": 400142, "students": 0 }, { "id": 400143, "students": 124 }, { "id": 400144, "students": 110 }, { "id": 400145, "students": 89 }, { "id": 400146, "students": 500 }, { "id": 400147, "students": 246 }, { "id": 400149, "students": 565 }, { "id": 400150, "students": 98 }, { "id": 400151, "students": 132 }, { "id": 400153, "students": 538 }, { "id": 400156, "students": 588 }, { "id": 400157, "students": 239 }, { "id": 400159, "students": 481 }, { "id": 400161, "students": 316 }, { "id": 400162, "students": 1152 }, { "id": 400163, "students": 723 }, { "id": 400164, "students": 101 }, { "id": 400165, "students": 375 }, { "id": 400167, "students": 776 }, { "id": 400168, "students": 452 }, { "id": 400169, "students": 1168 }, { "id": 400170, "students": 550 }, { "id": 400171, "students": 0 }, { "id": 400172, "students": 529 }, { "id": 400173, "students": 310 }, { "id": 400175, "students": 174 }, { "id": 400176, "students": 133 }, { "id": 400178, "students": 619 }, { "id": 400179, "students": 1115 }, { "id": 400180, "students": 917 }, { "id": 400181, "students": 320 }, { "id": 609674, "students": 749 }, { "id": 609676, "students": 485 }, { "id": 609678, "students": 1990 }, { "id": 609679, "students": 1197 }, { "id": 609680, "students": 1201 }, { "id": 609682, "students": 249 }, { "id": 609691, "students": 1116 }, { "id": 609692, "students": 1477 }, { "id": 609693, "students": 1240 }, { "id": 609694, "students": 1048 }, { "id": 609695, "students": 1502 }, { "id": 609698, "students": 804 }, { "id": 609704, "students": 597 }, { "id": 609705, "students": 311 }, { "id": 609708, "students": 644 }, { "id": 609709, "students": 331 }, { "id": 609710, "students": 345 }, { "id": 609711, "students": 0 }, { "id": 609712, "students": 170 }, { "id": 609713, "students": 799 }, { "id": 609715, "students": 1853 }, { "id": 609716, "students": 510 }, { "id": 609718, "students": 1536 }, { "id": 609719, "students": 1507 }, { "id": 609720, "students": 4476 }, { "id": 609722, "students": 153 }, { "id": 609723, "students": 282 }, { "id": 609724, "students": 1843 }, { "id": 609725, "students": 1287 }, { "id": 609726, "students": 1002 }, { "id": 609727, "students": 679 }, { "id": 609728, "students": 1066 }, { "id": 609729, "students": 1480 }, { "id": 609730, "students": 1551 }, { "id": 609732, "students": 1236 }, { "id": 609733, "students": 570 }, { "id": 609734, "students": 4307 }, { "id": 609735, "students": 222 }, { "id": 609737, "students": 1741 }, { "id": 609738, "students": 2125 }, { "id": 609739, "students": 1588 }, { "id": 609740, "students": 363 }, { "id": 609741, "students": 1923 }, { "id": 609744, "students": 255 }, { "id": 609745, "students": 333 }, { "id": 609746, "students": 2275 }, { "id": 609748, "students": 165 }, { "id": 609749, "students": 1039 }, { "id": 609750, "students": 16 }, { "id": 609751, "students": 637 }, { "id": 609753, "students": 833 }, { "id": 609754, "students": 265 }, { "id": 609755, "students": 2144 }, { "id": 609756, "students": 3244 }, { "id": 609759, "students": 709 }, { "id": 609760, "students": 444 }, { "id": 609761, "students": 324 }, { "id": 609762, "students": 416 }, { "id": 609764, "students": 1819 }, { "id": 609766, "students": 215 }, { "id": 609769, "students": 218 }, { "id": 609772, "students": 565 }, { "id": 609773, "students": 420 }, { "id": 609774, "students": 613 }, { "id": 609777, "students": 221 }, { "id": 609779, "students": 1183 }, { "id": 609780, "students": 828 }, { "id": 609782, "students": 480 }, { "id": 609783, "students": 162 }, { "id": 609786, "students": 179 }, { "id": 609788, "students": 271 }, { "id": 609789, "students": 422 }, { "id": 609790, "students": 273 }, { "id": 609791, "students": 335 }, { "id": 609792, "students": 744 }, { "id": 609793, "students": 410 }, { "id": 609794, "students": 253 }, { "id": 609795, "students": 161 }, { "id": 609796, "students": 939 }, { "id": 609797, "students": 280 }, { "id": 609798, "students": 505 }, { "id": 609799, "students": 856 }, { "id": 609800, "students": 235 }, { "id": 609803, "students": 652 }, { "id": 609804, "students": 733 }, { "id": 609805, "students": 336 }, { "id": 609806, "students": 444 }, { "id": 609807, "students": 466 }, { "id": 609808, "students": 396 }, { "id": 609809, "students": 678 }, { "id": 609810, "students": 1026 }, { "id": 609811, "students": 217 }, { "id": 609812, "students": 167 }, { "id": 609813, "students": 159 }, { "id": 609815, "students": 596 }, { "id": 609817, "students": 634 }, { "id": 609818, "students": 668 }, { "id": 609819, "students": 252 }, { "id": 609820, "students": 505 }, { "id": 609821, "students": 375 }, { "id": 609827, "students": 329 }, { "id": 609828, "students": 421 }, { "id": 609829, "students": 373 }, { "id": 609830, "students": 398 }, { "id": 609832, "students": 566 }, { "id": 609833, "students": 233 }, { "id": 609834, "students": 596 }, { "id": 609835, "students": 611 }, { "id": 609836, "students": 747 }, { "id": 609837, "students": 514 }, { "id": 609839, "students": 386 }, { "id": 609842, "students": 866 }, { "id": 609844, "students": 235 }, { "id": 609845, "students": 373 }, { "id": 609848, "students": 171 }, { "id": 609849, "students": 330 }, { "id": 609850, "students": 383 }, { "id": 609851, "students": 228 }, { "id": 609852, "students": 529 }, { "id": 609853, "students": 390 }, { "id": 609854, "students": 282 }, { "id": 609855, "students": 316 }, { "id": 609856, "students": 485 }, { "id": 609857, "students": 502 }, { "id": 609859, "students": 1012 }, { "id": 609861, "students": 387 }, { "id": 609862, "students": 308 }, { "id": 609863, "students": 235 }, { "id": 609864, "students": 287 }, { "id": 609865, "students": 410 }, { "id": 609866, "students": 861 }, { "id": 609867, "students": 446 }, { "id": 609869, "students": 157 }, { "id": 609870, "students": 399 }, { "id": 609871, "students": 206 }, { "id": 609872, "students": 291 }, { "id": 609873, "students": 135 }, { "id": 609874, "students": 786 }, { "id": 609875, "students": 521 }, { "id": 609876, "students": 539 }, { "id": 609879, "students": 943 }, { "id": 609880, "students": 316 }, { "id": 609883, "students": 389 }, { "id": 609884, "students": 730 }, { "id": 609885, "students": 271 }, { "id": 609887, "students": 471 }, { "id": 609891, "students": 214 }, { "id": 609893, "students": 687 }, { "id": 609894, "students": 262 }, { "id": 609895, "students": 180 }, { "id": 609896, "students": 317 }, { "id": 609897, "students": 272 }, { "id": 609898, "students": 1110 }, { "id": 609899, "students": 745 }, { "id": 609900, "students": 310 }, { "id": 609901, "students": 449 }, { "id": 609902, "students": 314 }, { "id": 609903, "students": 1221 }, { "id": 609904, "students": 372 }, { "id": 609907, "students": 401 }, { "id": 609908, "students": 219 }, { "id": 609909, "students": 93 }, { "id": 609910, "students": 839 }, { "id": 609912, "students": 492 }, { "id": 609917, "students": 247 }, { "id": 609918, "students": 139 }, { "id": 609919, "students": 341 }, { "id": 609920, "students": 421 }, { "id": 609921, "students": 210 }, { "id": 609922, "students": 468 }, { "id": 609924, "students": 319 }, { "id": 609925, "students": 192 }, { "id": 609926, "students": 338 }, { "id": 609927, "students": 303 }, { "id": 609928, "students": 327 }, { "id": 609929, "students": 265 }, { "id": 609930, "students": 405 }, { "id": 609933, "students": 215 }, { "id": 609935, "students": 544 }, { "id": 609937, "students": 683 }, { "id": 609938, "students": 837 }, { "id": 609939, "students": 396 }, { "id": 609941, "students": 342 }, { "id": 609942, "students": 752 }, { "id": 609943, "students": 318 }, { "id": 609944, "students": 237 }, { "id": 609945, "students": 571 }, { "id": 609947, "students": 327 }, { "id": 609949, "students": 962 }, { "id": 609950, "students": 353 }, { "id": 609951, "students": 406 }, { "id": 609952, "students": 293 }, { "id": 609954, "students": 268 }, { "id": 609955, "students": 338 }, { "id": 609956, "students": 370 }, { "id": 609958, "students": 694 }, { "id": 609959, "students": 578 }, { "id": 609960, "students": 753 }, { "id": 609961, "students": 266 }, { "id": 609963, "students": 423 }, { "id": 609964, "students": 498 }, { "id": 609966, "students": 249 }, { "id": 609967, "students": 230 }, { "id": 609968, "students": 560 }, { "id": 609969, "students": 290 }, { "id": 609971, "students": 317 }, { "id": 609972, "students": 786 }, { "id": 609973, "students": 525 }, { "id": 609974, "students": 545 }, { "id": 609975, "students": 260 }, { "id": 609976, "students": 816 }, { "id": 609977, "students": 141 }, { "id": 609978, "students": 275 }, { "id": 609979, "students": 1253 }, { "id": 609981, "students": 267 }, { "id": 609983, "students": 475 }, { "id": 609985, "students": 215 }, { "id": 609986, "students": 160 }, { "id": 609987, "students": 181 }, { "id": 609988, "students": 469 }, { "id": 609990, "students": 701 }, { "id": 609991, "students": 429 }, { "id": 609993, "students": 304 }, { "id": 609994, "students": 779 }, { "id": 609995, "students": 429 }, { "id": 609996, "students": 409 }, { "id": 609997, "students": 117 }, { "id": 610000, "students": 365 }, { "id": 610002, "students": 197 }, { "id": 610003, "students": 202 }, { "id": 610004, "students": 161 }, { "id": 610005, "students": 214 }, { "id": 610006, "students": 744 }, { "id": 610009, "students": 535 }, { "id": 610010, "students": 295 }, { "id": 610011, "students": 741 }, { "id": 610013, "students": 220 }, { "id": 610015, "students": 225 }, { "id": 610016, "students": 264 }, { "id": 610017, "students": 838 }, { "id": 610019, "students": 227 }, { "id": 610021, "students": 316 }, { "id": 610022, "students": 692 }, { "id": 610024, "students": 846 }, { "id": 610026, "students": 625 }, { "id": 610027, "students": 246 }, { "id": 610029, "students": 187 }, { "id": 610030, "students": 234 }, { "id": 610032, "students": 293 }, { "id": 610033, "students": 454 }, { "id": 610034, "students": 189 }, { "id": 610036, "students": 369 }, { "id": 610037, "students": 242 }, { "id": 610038, "students": 828 }, { "id": 610039, "students": 632 }, { "id": 610040, "students": 763 }, { "id": 610041, "students": 1072 }, { "id": 610043, "students": 303 }, { "id": 610044, "students": 295 }, { "id": 610046, "students": 1092 }, { "id": 610047, "students": 173 }, { "id": 610048, "students": 269 }, { "id": 610051, "students": 505 }, { "id": 610052, "students": 272 }, { "id": 610053, "students": 980 }, { "id": 610054, "students": 640 }, { "id": 610055, "students": 194 }, { "id": 610056, "students": 263 }, { "id": 610057, "students": 476 }, { "id": 610059, "students": 642 }, { "id": 610060, "students": 453 }, { "id": 610062, "students": 295 }, { "id": 610063, "students": 435 }, { "id": 610065, "students": 290 }, { "id": 610066, "students": 191 }, { "id": 610067, "students": 619 }, { "id": 610068, "students": 1143 }, { "id": 610070, "students": 655 }, { "id": 610073, "students": 327 }, { "id": 610074, "students": 668 }, { "id": 610076, "students": 404 }, { "id": 610077, "students": 464 }, { "id": 610078, "students": 699 }, { "id": 610081, "students": 536 }, { "id": 610082, "students": 1159 }, { "id": 610083, "students": 200 }, { "id": 610084, "students": 197 }, { "id": 610086, "students": 214 }, { "id": 610087, "students": 124 }, { "id": 610088, "students": 467 }, { "id": 610089, "students": 497 }, { "id": 610090, "students": 460 }, { "id": 610091, "students": 266 }, { "id": 610092, "students": 214 }, { "id": 610093, "students": 240 }, { "id": 610094, "students": 662 }, { "id": 610095, "students": 388 }, { "id": 610096, "students": 965 }, { "id": 610097, "students": 560 }, { "id": 610098, "students": 582 }, { "id": 610099, "students": 391 }, { "id": 610100, "students": 441 }, { "id": 610101, "students": 887 }, { "id": 610102, "students": 210 }, { "id": 610103, "students": 501 }, { "id": 610104, "students": 642 }, { "id": 610105, "students": 660 }, { "id": 610106, "students": 484 }, { "id": 610107, "students": 311 }, { "id": 610108, "students": 278 }, { "id": 610109, "students": 259 }, { "id": 610110, "students": 309 }, { "id": 610111, "students": 714 }, { "id": 610112, "students": 351 }, { "id": 610115, "students": 232 }, { "id": 610116, "students": 216 }, { "id": 610117, "students": 477 }, { "id": 610120, "students": 748 }, { "id": 610121, "students": 286 }, { "id": 610122, "students": 1044 }, { "id": 610123, "students": 223 }, { "id": 610124, "students": 235 }, { "id": 610125, "students": 461 }, { "id": 610126, "students": 479 }, { "id": 610127, "students": 784 }, { "id": 610128, "students": 234 }, { "id": 610129, "students": 305 }, { "id": 610130, "students": 187 }, { "id": 610131, "students": 118 }, { "id": 610132, "students": 199 }, { "id": 610133, "students": 294 }, { "id": 610135, "students": 711 }, { "id": 610136, "students": 423 }, { "id": 610137, "students": 652 }, { "id": 610138, "students": 845 }, { "id": 610139, "students": 307 }, { "id": 610141, "students": 511 }, { "id": 610142, "students": 526 }, { "id": 610143, "students": 208 }, { "id": 610144, "students": 578 }, { "id": 610145, "students": 726 }, { "id": 610146, "students": 195 }, { "id": 610147, "students": 734 }, { "id": 610148, "students": 814 }, { "id": 610152, "students": 320 }, { "id": 610153, "students": 339 }, { "id": 610155, "students": 607 }, { "id": 610157, "students": 1054 }, { "id": 610158, "students": 432 }, { "id": 610159, "students": 621 }, { "id": 610163, "students": 225 }, { "id": 610165, "students": 525 }, { "id": 610167, "students": 498 }, { "id": 610170, "students": 688 }, { "id": 610171, "students": 418 }, { "id": 610172, "students": 223 }, { "id": 610173, "students": 219 }, { "id": 610174, "students": 460 }, { "id": 610175, "students": 280 }, { "id": 610176, "students": 373 }, { "id": 610177, "students": 1029 }, { "id": 610178, "students": 163 }, { "id": 610179, "students": 725 }, { "id": 610180, "students": 362 }, { "id": 610182, "students": 335 }, { "id": 610183, "students": 404 }, { "id": 610184, "students": 310 }, { "id": 610185, "students": 1067 }, { "id": 610188, "students": 183 }, { "id": 610191, "students": 520 }, { "id": 610192, "students": 576 }, { "id": 610193, "students": 361 }, { "id": 610194, "students": 216 }, { "id": 610195, "students": 607 }, { "id": 610196, "students": 569 }, { "id": 610197, "students": 446 }, { "id": 610198, "students": 333 }, { "id": 610199, "students": 174 }, { "id": 610200, "students": 241 }, { "id": 610201, "students": 799 }, { "id": 610202, "students": 238 }, { "id": 610203, "students": 769 }, { "id": 610206, "students": 945 }, { "id": 610207, "students": 244 }, { "id": 610208, "students": 343 }, { "id": 610209, "students": 660 }, { "id": 610212, "students": 227 }, { "id": 610213, "students": 383 }, { "id": 610215, "students": 269 }, { "id": 610216, "students": 264 }, { "id": 610217, "students": 538 }, { "id": 610218, "students": 208 }, { "id": 610219, "students": 622 }, { "id": 610220, "students": 605 }, { "id": 610221, "students": 205 }, { "id": 610223, "students": 374 }, { "id": 610225, "students": 276 }, { "id": 610226, "students": 762 }, { "id": 610227, "students": 671 }, { "id": 610228, "students": 154 }, { "id": 610229, "students": 659 }, { "id": 610230, "students": 431 }, { "id": 610231, "students": 658 }, { "id": 610234, "students": 286 }, { "id": 610235, "students": 533 }, { "id": 610237, "students": 233 }, { "id": 610238, "students": 225 }, { "id": 610239, "students": 467 }, { "id": 610242, "students": 349 }, { "id": 610244, "students": 530 }, { "id": 610245, "students": 42 }, { "id": 610246, "students": 1087 }, { "id": 610248, "students": 510 }, { "id": 610249, "students": 345 }, { "id": 610250, "students": 302 }, { "id": 610251, "students": 337 }, { "id": 610252, "students": 281 }, { "id": 610254, "students": 304 }, { "id": 610256, "students": 97 }, { "id": 610257, "students": 190 }, { "id": 610263, "students": 663 }, { "id": 610268, "students": 305 }, { "id": 610269, "students": 301 }, { "id": 610271, "students": 296 }, { "id": 610274, "students": 238 }, { "id": 610276, "students": 284 }, { "id": 610279, "students": 266 }, { "id": 610281, "students": 490 }, { "id": 610282, "students": 263 }, { "id": 610284, "students": 474 }, { "id": 610287, "students": 343 }, { "id": 610290, "students": 252 }, { "id": 610291, "students": 652 }, { "id": 610293, "students": 301 }, { "id": 610295, "students": 249 }, { "id": 610298, "students": 276 }, { "id": 610299, "students": 201 }, { "id": 610300, "students": 388 }, { "id": 610304, "students": 575 }, { "id": 610305, "students": 360 }, { "id": 610308, "students": 100 }, { "id": 610312, "students": 105 }, { "id": 610313, "students": 425 }, { "id": 610315, "students": 100 }, { "id": 610316, "students": 203 }, { "id": 610317, "students": 310 }, { "id": 610319, "students": 241 }, { "id": 610323, "students": 257 }, { "id": 610325, "students": 503 }, { "id": 610329, "students": 283 }, { "id": 610334, "students": 211 }, { "id": 610339, "students": 342 }, { "id": 610340, "students": 567 }, { "id": 610342, "students": 381 }, { "id": 610345, "students": 263 }, { "id": 610347, "students": 354 }, { "id": 610350, "students": 403 }, { "id": 610352, "students": 664 }, { "id": 610353, "students": 673 }, { "id": 610354, "students": 256 }, { "id": 610355, "students": 193 }, { "id": 610357, "students": 99 }, { "id": 610362, "students": 199 }, { "id": 610363, "students": 1532 }, { "id": 610364, "students": 195 }, { "id": 610366, "students": 213 }, { "id": 610367, "students": 438 }, { "id": 610368, "students": 383 }, { "id": 610369, "students": 292 }, { "id": 610380, "students": 78 }, { "id": 610381, "students": 59 }, { "id": 610383, "students": 339 }, { "id": 610384, "students": 427 }, { "id": 610385, "students": 241 }, { "id": 610386, "students": 54 }, { "id": 610389, "students": 302 }, { "id": 610390, "students": 466 }, { "id": 610391, "students": 1419 }, { "id": 610392, "students": 347 }, { "id": 610394, "students": 97 }, { "id": 610396, "students": 830 }, { "id": 610402, "students": 168 }, { "id": 610405, "students": 398 }, { "id": 610499, "students": 260 }, { "id": 610503, "students": 174 }, { "id": 610504, "students": 76 }, { "id": 610513, "students": 186 }, { "id": 610515, "students": 399 }, { "id": 610518, "students": 251 }, { "id": 610520, "students": 549 }, { "id": 610521, "students": 157 }, { "id": 610523, "students": 471 }, { "id": 610524, "students": 391 }, { "id": 610529, "students": 616 }, { "id": 610530, "students": 278 }, { "id": 610532, "students": 886 }, { "id": 610533, "students": 777 }, { "id": 610534, "students": 479 }, { "id": 610539, "students": 775 }, { "id": 610541, "students": 607 }, { "id": 610542, "students": 636 }, { "id": 610543, "students": 1306 }, { "id": 610544, "students": 695 }, { "id": 610547, "students": 633 }, { "id": 610548, "students": 398 }, { "id": 610557, "students": 227 }, { "id": 610558, "students": 984 }, { "id": 610559, "students": 542 }, { "id": 610561, "students": 432 }, { "id": 610563, "students": 1093 }, { "id": 610564, "students": 823 }, { "id": 610565, "students": 231 }, { "id": 610568, "students": 262 }, { "id": 610569, "students": 221 }, { "id": 610570, "students": 416 }, { "id": 610571, "students": 260 }, { "id": 610572, "students": 0 }, { "id": 610573, "students": 2 }, { "id": 610586, "students": 603 }, { "id": 610587, "students": 600 }, { "id": 610588, "students": 977 }, { "id": 610589, "students": 307 }, { "id": 610590, "students": 317 }, { "id": 610592, "students": 933 }, { "id": 610593, "students": 193 }, { "id": 610594, "students": 90 } ];
    //
    // Sending query
    dataDisplay.innerHTML = "<p>The data table will appear here after the query response is returned and processed.</p>";
    const sentQuery = new Date();
    progress.innerText = "Query sent to CPS API at " + sentQuery + ". Response can take a full minute or longer, depending on network traffic.\nAwaiting Response.";
    const fetchURL = `https://api.cps.edu/health/cps/SchoolNoAdmittanceSummary`;
    let counting = setInterval (function() { progress.innerText += "." }, 1000);
    let data = await fetch(fetchURL).then(
      response => response.json()
    );
    //
    // Upon query's return
    datePicker.style.visibility = "visible";
    dateLabel.style.visibility = "visible";
    buttons.style.visibility = "visible";
    clearInterval(counting);
    const responseTime = new Date() - sentQuery;
    progress.innerText += `
      Query response returned in ${responseTime/1000} seconds. 
      Processing data for display...
      `;
    counting = setInterval (function() { progress.innerText += "." }, 1000);
    // 
    // Convert data and render to table
    bySchool = GroupDataBySchool(data,datePicker,populations);
    let selectedDate = datePicker.options[datePicker.selectedIndex];
    let selectedDateValue = selectedDate.value;
    let selectedDateText = selectedDate.text;
    dataDisplay.innerHTML = `<h3>People in quarantine on ${selectedDateText}.</h3>`;
    let ordered = orderRows(selectedDateValue,bySchool)
    dataTable = renderTable(ordered);
    dataDisplay.appendChild(dataTable);
    clearInterval(counting);
    progress.innerText += "Data processed.";

    //
    // Activate copy to clipboard
    myClipboard(dataDisplay);
  });
  lookup.click();
  datePicker.addEventListener ( "change", () => {
    const selectedDate = datePicker.options[datePicker.selectedIndex];
    const selectedDateValue = selectedDate.value;
    const selectedDateText =  selectedDate.text;
    let ordered = orderRows(selectedDateValue,bySchool);
    dataTable = renderTable(ordered);
    dataDisplay.innerHTML = `<h2>People in quarantine on ${selectedDateText}.</h2>`;
    dataDisplay.appendChild(dataTable);
    dataDisplay.innerHTML += "<p><a href="#buttons">Scroll up to the top of the table.</a></p>";
  });
  return false;
}

function orderRows (selected,schools) {
  let rows = [];
  for (school of schools) {
    const row = {
      name: school.name,
      persons: 0,
      population: 0,
      percent: 0
    }
    let matchDate = school.dates.find( date => date.date === selected );
    if (matchDate) {
      row.persons = matchDate.persons;
      row.population = school.population;
      row.percent = Math.round( 1000 * row.persons / row.population )/10;
      if (row.population > 0) { rows.push(row) }
    }
  }
  rows.sort( (a,b) => b.percent - a.percent);
  return rows;
}

// Data comes from the API as complete record for each week, including school.
// This groups all the weeks for each school into one object as an item in the array.
function GroupDataBySchool (data,datePicker,populations) {
  let dateSet = new Set();
  let schoolsData = []; // This array is returned after processing.
  for (datum of data) {
    dateSet.add(datum.RecordDate);

    let schoolData = schoolsData.find(school => school.id === datum.SchoolID);
    
    if (schoolData) { // If school is already in the array push this report's data.
      const report = {};
      report.date = datum.RecordDate;
      report.persons = parseInt( datum.PersonTotal );
      schoolData.dates.push(report);

    } else { // If school is not found in the array, create the item.
      const school = {};
      school.id = datum.SchoolID;
      school.name = datum.SchoolShortName;
      const matchedSchool = populations.find(row => row.id.toString() === school.id);
      if (matchedSchool) {
        school.population = matchedSchool.students;
      }
      const report = {};
      report.date = datum.RecordDate;
      report.persons = parseInt( datum.PersonTotal );
      school.dates = [];
      school.dates.push(report);
      schoolsData.push(school);
      schoolData = schoolsData[schoolsData.length - 1];
    }// end of else

  } // end of for loop over data
    let dateArray = [...dateSet];
    dateArray = dateArray.sort().reverse();
    let dates = [];
    for (date of dateArray) {
      const dateval = new Date(date);
      const dateString =  new Intl.DateTimeFormat('en-US', {month:"short",day:"2-digit"}).format(dateval).toUpperCase();
      datePicker.innerHTML += `<option value="${date}">${dateString}</option>`;
    }
  return schoolsData;
}

//
// Creates the table that displays the data in final format.
function renderTable(rows) {
  let table = document.createElement("table");
  table.id="dataDisplay";
  let thead = `
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">People <br>Quar&shy;ant&shy;ined</th>
        <th scope="col">Student <br>Pop&shy;ula&shy;tion</th>
        <th scope="col">*Per&shy;cent <br>Quar&shy;ant&shy;ined</th>
      </tr>
    </thead>
  `
  table.innerHTML = thead;
  let tbody = document.createElement("tbody");

  for (row of rows) {
    let tr = document.createElement("tr"); 
    tr.innerHTML  = `<td>${row.name}</td>`;
    tr.innerHTML += `<td>${Number(row.persons).toLocaleString()}</td>`
    tr.innerHTML += `<td>${Number(row.population).toLocaleString()}</td>`
    tr.innerHTML += `<td>${row.percent.toFixed(1)}%</td>`
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  const buttons = document.getElementById("buttons");
  // buttons.scrollIntoView({behavior:"smooth",block:"start",inline:"start"});
  return table;
}

//
// Number formatting functions
//
function convertDate (datestring) {
  const date = new Date(datestring);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  const formatted = yyyy + '-' + mm + '-' + dd;
  return formatted;
} 

//
// Functions related to copying table to clipboard 
//
function myClipboard (dataDisplay) {
  // ClipboardJS loaded with separate call in page body
  var clipboard = new ClipboardJS('.btn');

  clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    const msgTarget = document.getElementById("copiedMsg");
    msgTarget.innerText = "Table copied to clipboard";

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
}
