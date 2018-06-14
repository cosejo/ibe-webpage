var currentPhotoIndex = 0
var photoIncrement = 3;
var finalPhotoIndex = 126;
var filesJson = {
 "files": [
  {
   "kind": "drive#file",
   "id": "1fxkd1wL62iLz-OufotQ9NolZqBlHh4CL",
   "name": "Switch-99.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1qzPnD99pj7p_c2dNcYzEuUSkxHhQQpE1",
   "name": "Switch-98.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1WN7pGOcXaNIVIgZX0zSUJufdLkRlDxQX",
   "name": "Switch-97.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1KdiFZOk357QjI7mp3g7g64W80C5sJB53",
   "name": "Switch-96.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1OfZw9Jvj499uqbqeFAwUVF4auCwQWCUZ",
   "name": "Switch-95.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "12a2oM13ola3zIMLsJ7MuIrjiOMqxbKpZ",
   "name": "Switch-94.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1hJPLwB1ow4PjtaQGzt7Wo_sDd3ownmUo",
   "name": "Switch-93.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1_nqBOpOnGz3qCbRC_sqgzpLKmh55pxyx",
   "name": "Switch-92.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1HRkHaWeN61Qy1NF5OWRjQDSdH6KUKZPt",
   "name": "Switch-91.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1uJYi7Q9UAXqcC22MdSf4G9Vxqaytg_p9",
   "name": "Switch-90.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1wCPV01Vy51c_57HKODxmxC9Qqvk8qe0e",
   "name": "Switch-9.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1X9n7w4O1djhbmgj7pkohZEfj_3xU9UK0",
   "name": "Switch-89.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1filyeZb1QZfSvp1tDR8K76uUXkzoUMxu",
   "name": "Switch-88.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1ct2VKROeduOLDJWm7DtISDMPxs92FkXD",
   "name": "Switch-87.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1VdObuU-o1M4tdL1pe-99jQI8C_j4utNb",
   "name": "Switch-86.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1EENDxcHPPxjNPgcBtjBPF-EPz6Y7xrrW",
   "name": "Switch-85.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1zcIZ0ttcZQiIorPtrJV0qRiy7gV75If3",
   "name": "Switch-84.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1_ILQ1iYbY1ARpn9wLFysSxJwE-xMXQ5A",
   "name": "Switch-83.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1mI2WpkWr2AkyHEuak4y3KH1_rlVkWWEb",
   "name": "Switch-82.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1EhFAQ-JdC1Un6I3BePCJ7Y49-HPD_Voo",
   "name": "Switch-81.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1rgZC0-43jFJUyJzGAJtbZ_M-GDAn4IIU",
   "name": "Switch-80.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1n82d-MfHI-2hkfTqqM1OIk59cc8aA5kb",
   "name": "Switch-8.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1VQGMV54AnzbqK_93oHmIr1AEMBVRXoox",
   "name": "Switch-79.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1J5Q0cHNbnTs5Gx_appwOBqUHKVG-TzK-",
   "name": "Switch-78.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1mHhngCgrAShHpas0br1JTu3ZwlBu1MAZ",
   "name": "Switch-77.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1XhrWJ4xnAaUFCc96pa6ry8pfGxwfpPac",
   "name": "Switch-76.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1ypQsYS_mb6Xx7LewoF_75GmQYkDb6SZv",
   "name": "Switch-75.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1WDmd7p2qWKKW-fgE_NYOnTk5ZWoTz3nW",
   "name": "Switch-74.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1hDjVwkfynVRtbFvmRNaXU_yqRoGA5Ray",
   "name": "Switch-73.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1mnPI8lE6UmGacTHTOW6DxDoTzlNKAgx5",
   "name": "Switch-72.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1xQwhEzggKDpmXVlgZBaXY4bNYW1un2O-",
   "name": "Switch-71.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1RGafaOA3wgxftKBuCPgh9BLUXWg-9iL9",
   "name": "Switch-70.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1o7eR5iXu7iNqxra6hbCNGV0shzSYjQUH",
   "name": "Switch-7.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1ykFr4baCC7rE4vkDSHlViwdQcIxTkcu5",
   "name": "Switch-69.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "10AdsdrscfPwlWSpAuvhwphyLIhEQszqg",
   "name": "Switch-68.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1QQQqeC0MYdjaghctC6xzTrEA6xSmZwcd",
   "name": "Switch-67.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1F-4n70pBSRKxItSXKJDY7J-skKYFE2Zo",
   "name": "Switch-66.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1_Tl7DXdQQPxJR-IyHEk4hPvnRIweAwxW",
   "name": "Switch-65.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "19pqVMLoBcK1hIT3w4FOuf_cytGPETf3N",
   "name": "Switch-64.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1RGvTcgmzKDvOfLARJ0IBdaAtAfRGaQ64",
   "name": "Switch-63.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1NeJOmnIqcQa87p34Mc7yWh5YyHkyNBGq",
   "name": "Switch-62.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1_Hf8A-kfjV4_MuIzU61_kzw3BY5X40CP",
   "name": "Switch-61.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "16hkJO5-G6pYaclToZ55UdcTx1jnffrGz",
   "name": "Switch-60.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1UG5NT2ONp6VhvtAodyADMcPo8nXr_4BX",
   "name": "Switch-6.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "17AOBQJRD8MqgZnWkfLETt0blckZP96fx",
   "name": "Switch-59.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1LZ--LCFO-djiTEKJywpTkm-hPBihd52O",
   "name": "Switch-58.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1e0VAoUdrjgiy-YG3YyuwverI4K3zsx1n",
   "name": "Switch-57.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "18Wt3j1kxGpoG4PaZv_9gzcmcuSTgREK3",
   "name": "Switch-56.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1PD5fAyb2OJ2a43RI5Q6I5B8mZf1s4J6C",
   "name": "Switch-55.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1O5BjetM-kRwwzEehz1mfoJ5iSw05PZVz",
   "name": "Switch-54.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1Hisy-ydmc5POgLr4oRJ6L7P4WhLVBw41",
   "name": "Switch-53.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1WdJyUa30ssFZMZtevvD4KyPIZ9G3w9DQ",
   "name": "Switch-52.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1Lllt_ndn2ek2y8i8I34EuXncoPMlGGxR",
   "name": "Switch-51.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1XRgZpe51wGTiTne-AdX-YTK9IMEYwHlN",
   "name": "Switch-50.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1KkDcXPdmkkolYrRZ3GdnMNwuFoe6lMib",
   "name": "Switch-5.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1BKpKu3YjYJe1NXK6VkFu3sJ7xe8-P8_s",
   "name": "Switch-49.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1YET7JJUKfMMLkj4t9zctxuuPb4gx7ZiU",
   "name": "Switch-48.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1Dml1qkx0RLaHi7umJ5jA6LI2us4LltC-",
   "name": "Switch-47.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1R_OdjS-FNkGtZ2D-6wUu1tF4euICWZi-",
   "name": "Switch-46.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1OCgW-Glxm7yc1mg67oNKE2d_JzRCx-GS",
   "name": "Switch-45.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1R2EZuL6L_dVJV1LueQqs1eXEzUDrN6tK",
   "name": "Switch-44.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1kIa5W4qw8bDoALD8o1fNJCAfc2_q9B4_",
   "name": "Switch-43.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1NwFYVNbaAylOcBmByZhTSDGTmZaMzqiQ",
   "name": "Switch-42.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1CLgXLIQoXmNz6wHYpAJP0Q1R8z1TF6xM",
   "name": "Switch-41.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1LCORSW1exLkXlslihBbIqaK0WlU4GlsL",
   "name": "Switch-40.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1oFjT-XDvXNUFmFhh-aAWJ8663tybXfHp",
   "name": "Switch-4.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1u59xpqJapU2CNe5LyBcuPxedY0kMlTcU",
   "name": "Switch-39.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1ICxK0Pzl4Arq3I1JD7AvChoEu2-qrk10",
   "name": "Switch-38.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "160I8LkUyE17k05pzMiYANGnu5W9xDAAD",
   "name": "Switch-37.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1gGUyM8SMbdKd72VDUu53-ucNCqVRDyiF",
   "name": "Switch-36.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "17QSxJGMXxLnSTX4oq4DpPLgZieMWVw1P",
   "name": "Switch-35.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1oe-OKdx7uyONir5eOFjmGLBUnO6_xlf1",
   "name": "Switch-34.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1mycXwl9RMukyGUR7kMQpCcSgFs7ioXq5",
   "name": "Switch-33.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1wBkE4hxIbTcOUqWw3YMBi039gNC_T2Ps",
   "name": "Switch-32.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1GKtQTm6hCRczQtQ9PIktR4mzkqcKKR_u",
   "name": "Switch-31.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "10U55p8hIUmpzQEKi2HRGS-rTy27jV3sq",
   "name": "Switch-30.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1qiuaRXUiOw45PRdX6o__2bypolQ7sgOO",
   "name": "Switch-3.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1KNJTOl7NM5LT_O0nuBqmD7kEO_dLfnSa",
   "name": "Switch-29.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1Uw-whWN5qjpCW8Kn9TUjdpqRsAy1Rfcb",
   "name": "Switch-28.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "14nL0MmBDlsIXYrG_Xrq7C-jATyyNxuWO",
   "name": "Switch-27.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1E39IjweyX90yQSHDKQLiDoLHL3YvFEpU",
   "name": "Switch-26.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1_fJ8xBbMvmeSMtAmBDW8vN6m4mnRXRpJ",
   "name": "Switch-25.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1jXnE-MKCccIU19saNlwV7MaZ9dWd_QU-",
   "name": "Switch-24.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1wO-SCRyzKyhUOqT_JnfGOJaHPfMOfjfk",
   "name": "Switch-23.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1wnRn6zhUXhwaVoA28e2fNWJCX5acXWGZ",
   "name": "Switch-22.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1wBH5H_nyjEevXfBMvENxbuZjmECmMfKI",
   "name": "Switch-21.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "11pQq1qXiw0wbsPjVUBlhmUkF_4Jh6dZX",
   "name": "Switch-20.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1vp4Cw_c12I5g3j7pX3ebqcHvF8heTjPR",
   "name": "Switch-2.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1fMGgogmR8hRWMkVhOgEIgis4gZmqU7qm",
   "name": "Switch-19.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1PmmjfP9Hq7wrGMNH4TBLupDLf1EmTSCm",
   "name": "Switch-18.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1KhKgSU4werGd7MhVfJKzAMuDTQVMHa3M",
   "name": "Switch-17.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1H5xHqi6dZ8YqShVIt7VH4IP3spNRSXdX",
   "name": "Switch-16.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1NYmtysr4s6TeQUCYGzZ40xC411PrXoTh",
   "name": "Switch-15.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1IfHmSszrWRBfUDZH0Eua0rKI3sQ6HMhn",
   "name": "Switch-14.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "11Xe1M9-_YBPW68WpTmVljZ40OJay-c0M",
   "name": "Switch-13.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1vjV7aLS-n7V15BmhWJvpj2FO_AAMCOIG",
   "name": "Switch-127.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1j8dZFFgE65Wu-V2dOXy1VrZ-r3t_mjPW",
   "name": "Switch-126.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "163uP_ubTcTuSIOrldDDJnYiuIzb3kqjW",
   "name": "Switch-125.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1rvYdKRNcik2rnKlBoBQF0sQ_6aKnb7uN",
   "name": "Switch-124.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1IvaNtchmo4EQyMCh97w9tpj753-dG_zn",
   "name": "Switch-123.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1uV6XBV_z944SFmLJC_hiQK1LuSRI1n2r",
   "name": "Switch-122.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1OPMXR6S8rHZka1sZ4qM8mJplBw_Ig8Jx",
   "name": "Switch-121.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1f3T0EVTgltBcqP4G-a51rJawrUdYR35w",
   "name": "Switch-120.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1lJ0kHyTNx5KTmibI0uQtYsP3k8pOTZhC",
   "name": "Switch-12.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1upvFWvtCvAiRleetKnlKEWKgTZiMZEte",
   "name": "Switch-119.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1wPJEL2XlILrJ46jq_vc69dY9tLnpx4ka",
   "name": "Switch-118.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1YR7j2vDHF75LRnbNO-Jt6A8hCqQBFj7q",
   "name": "Switch-117.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1M_C2dkTA2mCg8VGTuOhgKLmP8O5vcR-I",
   "name": "Switch-116.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1o7Frh3fFDOny43tdWyw-egpk8SJvA9Vx",
   "name": "Switch-115.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1pI_YEaT5SZqNeWuIlUuRlOQmEhmvt4vX",
   "name": "Switch-114.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1JZmx3kCBrOZrdJ7B-KX7YNqD2eSRKXWc",
   "name": "Switch-113.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1ff1HIbzhnjKsxTm467Kn3s1bKnSClJw1",
   "name": "Switch-112.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1xio07vGf4BB4MCRsVSHNRjxANPScV1Dm",
   "name": "Switch-111.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1bNQOTOvS9S4RE-0KJ4tPs4i-nqaADmor",
   "name": "Switch-110.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1aX_Y51EiDmkrMRmz8X0S0vum76o3mSbT",
   "name": "Switch-11.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "100EXKiHwrwhPIthkIyzZHVsz3JcqQly1",
   "name": "Switch-108.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1OJGt2ZEyKjWA0sKlH92RWliN_1lETn4X",
   "name": "Switch-107.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1acoWl8I2gHJEo2Y0th2UYfunvW0OLG-s",
   "name": "Switch-106.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1xLqfG0yvW36DOFsD5tOCZJOELIsoN7bm",
   "name": "Switch-105.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1c7a_f7xuS4zG7FdMYsrycYnbP69VSM8c",
   "name": "Switch-104.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1WnVZOUENwwyzYNaruE7sa5CAjR7GXs7Z",
   "name": "Switch-103.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1toamnCiN41FSdwMm4MJ1tHKXfxffKLV7",
   "name": "Switch-102.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1IsS_bDDfKaJdxb7zr1wDzWDQIg-HZ96j",
   "name": "Switch-101.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1Vl11WYYsBFBdkLi1Lan9LRw3CV-Vypu0",
   "name": "Switch-100.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1oIt5uY3iDk_72VBZC1se54rqx98Fgv7x",
   "name": "Switch-10.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1iBTDcZAbW10xA8p9LcBSfh4KC1jwlXve",
   "name": "Switch-109.JPG",
   "mimeType": "image/jpeg"
  },
  {
   "kind": "drive#file",
   "id": "1Z4rwrrVMEb1rez9PLBqazo98_n7YZw8j",
   "name": "Switch-1.JPG",
   "mimeType": "image/jpeg"
  }
 ]
};

loadImages();

$(window).scroll(function(){
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadImages();
    }
 });

function loadImages(){
  if (currentPhotoIndex < finalPhotoIndex) {
    $(".lds-spinner").show();
    retrieveImages();
  }
  else{
    $(".lds-spinner").hide();
  }
}

function retrieveImages(){
    for (element = currentPhotoIndex; element < currentPhotoIndex+photoIncrement; element++) {
        $("#gallery-row").append('<div class="col-sm-6 col-md-4"><a class="lightbox" target="_blank" href="http://drive.google.com/uc?export=view&id=' + filesJson.files[element].id + '""><img src="http://drive.google.com/uc?export=view&id=' + filesJson.files[element].id + '"alt="photo"></a></div>');
    }
  $(".lds-spinner").hide();
  currentPhotoIndex += photoIncrement;
}