var config = {
    apiKey: "AIzaSyA7t47Cn9adb39lPVWuMCRqbBheXct6css",
    authDomain: "switch-09-06-18.firebaseapp.com",
    databaseURL: "https://switch-09-06-18.firebaseio.com",
    projectId: "switch-09-06-18",
    storageBucket: "switch-09-06-18.appspot.com",
    messagingSenderId: "564062165167"
  };

firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref();
var currentPhotoIndex = 0
var photoIncrement = 3;
var finalPhotoIndex = 127;
var filesJson = {
    "files": [{
            "kind": "drive#file",
            "id": "1B6cuSL3xGBzZ656ETnzrSKc0wn5EF0gf",
            "name": "7583930320_IMG_2966.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "13HsvR6U0PUyjcijuWo8dIgPn1bNE8nKP",
            "name": "7583930320_IMG_2965.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1CI2XHt5r137Z2X975CFjb-lZD_QCwFg0",
            "name": "7583930320_IMG_2957.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1zeGkYXsC1ZFYsc4t5Rih4eyp1t_LbC_G",
            "name": "7583930320_IMG_2962.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1P1Pnwp3uwys3N4yTbgnFbsOB0lXy84Kj",
            "name": "7583930320_IMG_2956.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1YcoSRYdEgc4aiLJMzV_vagKpfLUKLLIG",
            "name": "7583930320_IMG_2958.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1SjKIfMJlxYqXC2jsxaNM0SR5jOE_gp_3",
            "name": "7518842528_IMG_3012.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1i-hs7xG8sr2o6j73A8X8Dth0BqOHO1ot",
            "name": "7518842528_IMG_3016.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1NSmw49IG8qXQA0JVFbbZATMWaAFfkYnv",
            "name": "7583930320_IMG_2992.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "13rOiJ1pXlHfTv9r6K5VeMBIkg86Vrl1d",
            "name": "7583930320_IMG_2884.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1BmtzvS0Fg9GTvfLfxPn1acd3RxrtMmxj",
            "name": "7583930320_IMG_2874.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1JrSgA5tJ_9VWqTyr_GE0OOrfQxLTHrHW",
            "name": "7583930320_IMG_2881.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1iV3HJESj11w0mr1XQIfm4i7k2Ry8l-KU",
            "name": "7518842528_IMG_3009.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1kPEwFH1tS-vS_KjYRfdi6G2x6eBs4iQ_",
            "name": "7518842528_IMG_2995.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1qJaRL4P_Ndvkifrd6efUuzcmguX7g16N",
            "name": "7583930320_IMG_2869.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1ahvfmUCum1yCPgRnsV-XruPeZAgr2f1w",
            "name": "7583930320_IMG_2886.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1RPxWBzjA6Df6uX_tWXpPT4ytp_bASSge",
            "name": "7583930320_IMG_2863.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1MtXjmgd3AuWizZG2udu-HrqpFpfCJvq4",
            "name": "7518842528_IMG_3013.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Ceevgc10pQ6lQr52dHYlsV_BLir_gI5r",
            "name": "7518842528_IMG_3010.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1SgUDckBvPnU-oUA_bYu9o2uSyo8J9oqO",
            "name": "7583930320_IMG_2876.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1vzbYVrnUjB66eHBmPqWsi0Kqi6o94DZM",
            "name": "7583930320_IMG_2861.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1tOB_lj4WPn1BrVI7YiPNvQqzawp--3Ou",
            "name": "7518842528_IMG_2981.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1vEphdsAbhfb9nDYUUnjzaz50RCvEkvkV",
            "name": "7518842528_IMG_2997.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1ju7bEFng6cVTIuSSKk7vGsMyjbV8ucBY",
            "name": "7583930320_IMG_2888.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1_HzHD9nk-axsRneTex4pCzdaFPEWIM-2",
            "name": "7583930320_IMG_2860.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1kwEOdxm64IcPLj3YJ6dY-Eoifj9ARxFs",
            "name": "7583930320_IMG_2897.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1OWiBgKiIambc6yHHCeXY4ythkQMaBxnM",
            "name": "7583930320_IMG_2908.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "12MSWLsYTcrGoLsRgkPRvnTYiZwbbt-aF",
            "name": "7583930320_IMG_2935.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "12ILaw7WBFV8lDcIxcZTYq-j5KQ98PFuA",
            "name": "7583930320_IMG_2883.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1qHrtoq-3Z889OZYzmqsrnIrvVrgDdlt0",
            "name": "7518842528_IMG_2983.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1h6nMg6gedYvzH-eJR8qGidNY0crjApyM",
            "name": "7583930320_IMG_2882.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1WL9vYdAChMCHXqTQnZjPtdOjq1U7gS_i",
            "name": "7583930320_IMG_2961.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1MMDfXz8rC06GyPeeBCn_PnRcjQEfxhK3",
            "name": "7518842528_IMG_3011.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "18Oiq-FOiEL-mT1pLCoJxHUnZsiv3Kr2I",
            "name": "7518842528_IMG_2996.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1PID7Txvwf-qhvBPlPuWJ4ggl_vbznbi5",
            "name": "7583930320_IMG_2953.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1_DAOdhjy82j9lFn2FX0Ry6xkxBGwDPg5",
            "name": "7518842528_IMG_3045.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1BA3gy06KuvumdzPAZXhzK2-Bk-S-K7e0",
            "name": "7583930320_IMG_2880.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "19MAzJ2JUFS-b5GHzYV6BbNdkpffXNYOQ",
            "name": "7583930320_IMG_3000.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1GEDup4blKFEq66NAg4ywAEQZlf9QwWEn",
            "name": "7583930320_IMG_2921.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1kkTTAFhr0Q24LZ8fV5cGVxNLMZKZOhoP",
            "name": "7583930320_IMG_2950.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1N_TO5busqRSr0-1wSwY6YdA0GUhsP5wS",
            "name": "7583930320_IMG_2918.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Jty3jT57oIQLRkbwSfeqTsWVRcF6BVMs",
            "name": "7583930320_IMG_2919.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1nNU4sU3dHvjLnUZoPkLAybilCvMtxw3g",
            "name": "7583930320_IMG_2945.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "119yggHo4c1bI9zS8V9uhrsDB2oJFeTcj",
            "name": "7583930320_IMG_2949.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1ZXlVTK6RkLW1L_gLPT1TDwz7r7jl0sZv",
            "name": "7583930320_IMG_2901.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Pi4DVq7gUA-1hOL0a_xOkR2tNTB84NF4",
            "name": "7518842528_IMG_3025.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Hfp-25CoQMwg6iKMhZtsH7kJoci3JY-Z",
            "name": "7518842528_IMG_3019.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1j10CCOsFladFyv9jNQJF0jjoRW43Eur1",
            "name": "7518842528_IMG_2979.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1fCjsfbV3MOYM26c6iElpjTIOqcZ6CuvL",
            "name": "7583930320_IMG_2923.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "14Y3xcoPf3MY_vb1m3gzedRKO5fi_IA74",
            "name": "7583930320_IMG_2891.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1FpjTBGZrg5yy2bEXULLq-J8qVPn-WKFP",
            "name": "7518842528_IMG_3037.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1K9GtdadbERxD-V77xpSgvBzSChMsO4eY",
            "name": "7518842528_IMG_3004.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1JKKLD3feUlbNOKEa_X_4OVwZqGVDDMRg",
            "name": "7518842528_IMG_3044.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1On32ghQUOB0hHddEzy-ZsMeICoOebMI9",
            "name": "7583930320_IMG_2917.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1uWulOlHPhT8iEZlQMlPwQfiAxBIXtGni",
            "name": "7583930320_IMG_2924.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "10B5rroEIoTqFPjeOgwNKIVzUxJXxNUC6",
            "name": "7583930320_IMG_2915.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "19XdwySrIkjszA1_JI4owM-8zxWIRxnc5",
            "name": "7583930320_IMG_2920.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1CgntTCuq1LREQA9v-mHJ5h-Z19bfvjaf",
            "name": "7583930320_IMG_2913.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1QuLWEXNG1IWNfZTnAYkAir5BasW9VCq2",
            "name": "7518842528_IMG_3020.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1z0_qLzlvK1oOeCpsalK5vkIHEkJbh7rl",
            "name": "7518842528_IMG_3048.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1qNQdO5E-4Md9peq--f-no7aPtcmUe8i4",
            "name": "7518842528_IMG_2988.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1jxgSJicjeBTO3HjtdomGZzcUVM3lroXD",
            "name": "7583930320_IMG_2938.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Vs9cKZ-2y_YXyrhXbmNcku0SjJZ_YRWB",
            "name": "7518842528_IMG_3005.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1wf2qu2JpLFg6QCCC4NzR2ovoU7tH2_HP",
            "name": "7583930320_IMG_2937.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1AMRp0l-4KVQbkcgDVYgG8DS1ANAzZq-h",
            "name": "7518842528_IMG_3024.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1l62FPkyTtzpi0XrbtVv7ytsSysSgFlzT",
            "name": "7518842528_IMG_2999.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1h9rvWcu_9RTUFWgYGsjoA6GMlJyJdyzg",
            "name": "7583930320_IMG_2912.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1C9w8_uzL1gcRMm2GpZ39R0eYhQtpYbwI",
            "name": "7518842528_IMG_2985.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1lNLmoKT1AW8rr7qDaIDVXWB8q-HCOPEt",
            "name": "7583930320_IMG_2899.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1yTo3k_lLmamSJzYpi3atOKFPGXHxQNbO",
            "name": "7583930320_IMG_2896.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1jOR_QOf59oHpJeFp8tYNoNLTaLJClYie",
            "name": "7518842528_IMG_3040.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1FNnfTqT9y3hP9bQmPLdbKBKDLwalC03F",
            "name": "7583930320_IMG_2916.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1eYci7ihj19bFYCqF3oCcVf59jBDgZat-",
            "name": "7518842528_IMG_3039.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1I09EIOGWXZbfK1PhyUblkb8UKuHevegz",
            "name": "7518842528_IMG_3049.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1lPXT7Q6cNfU_7R18lLjoSn1ebhXp-DBF",
            "name": "7583930320_IMG_2890.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1cXU1ZSyEQuOQCncWXKfoEIbfZPbusa73",
            "name": "7518842528_IMG_3026.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1QxqgXvFCHE9r3ZdquPvKpwhND8ADNAca",
            "name": "7518842528_IMG_3046.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1rsh-LEu4Ou3bgV-K9JcI0rse4685e8Xc",
            "name": "7583930320_IMG_2911.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1iXdU8BvgAPKkpAPfWESSd9R2NaDklPJs",
            "name": "7518842528_IMG_2972.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1900Au0HaQQggNSnLOqMsVRDfmSwvbFs9",
            "name": "7518842528_IMG_3056.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1t-YZv7drqu9BrbZ5b3iUbUn5wEuJH6S3",
            "name": "7518842528_IMG_3036.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "11KWKzWqHLrjFnSQyE1l4R_jzX8DKDvp7",
            "name": "7518842528_IMG_3017.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1MB_uKcSoWUDEQ9Tm3GY0dWosrBJVoQq7",
            "name": "7583930320_IMG_2929.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "109j7vK9rGDD8-8WldUZkAqt3TBA0mTTz",
            "name": "7518842528_IMG_3035.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1A5uRXxUldt-f1PaHxcMx6kcae6nJndf4",
            "name": "7518842528_IMG_3001.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1abvVib8pxYdJ3Wlj7BGc3D0czQKwL4Ex",
            "name": "7518842528_IMG_3023.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1bHBtVtrQmXHRn2FmaDsX1zunu_8uubII",
            "name": "7583930320_IMG_2914.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1phV18iv1L-Nx_-2xyRbpxyujBnE0NW71",
            "name": "7518842528_IMG_2968.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1mpOZdIo2Mj7YQEpShomQ_DNAsETpe8Cz",
            "name": "7583930320_IMG_2894.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1F1q3PrvF-j3eQuvcIMFUjJC--GIPudnT",
            "name": "7518842528_IMG_3050.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1MfAOY22cu9SE_i3desLAs5b4iKu2iT1F",
            "name": "7518842528_IMG_2978.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1AXYQLQPN5R6lbNE7AWX_NudT8zne14my",
            "name": "7518842528_IMG_3032.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1W3TRtJMM6OMH9N7JN7tcAOA1ptbeoG4G",
            "name": "7518842528_IMG_3031.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1dLdVvzJtfK6iYyrgXzL7BbVWzlRyKZxa",
            "name": "7518842528_IMG_3052.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1MDeLFg0HCyZaKxoAv-A1bOqYfTosShxJ",
            "name": "7583930320_IMG_2932.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1SkZiEAsfGkycPLuCKUEDVdrRb-Ws-pvh",
            "name": "7518842528_IMG_3021.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Ah3YgXH_vlw-VhGml72Xxxno7TB4YlkM",
            "name": "7518842528_IMG_3038.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1TOjvpRpoyl2A04PfIZCBs1MREaKBT_LV",
            "name": "7518842528_IMG_3041.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1xthUNj_4_hrjnrlj8_WyVpg37BlQxZRk",
            "name": "7583930320_IMG_3028.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "14cQ314Bcm2G5m8kxnvskV8cDHknlOAUD",
            "name": "7518842528_IMG_3053.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1jEVvt18ZkgszymMtUNHVdHaisfCeF50_",
            "name": "7518842528_IMG_3033.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1n5V5l0IIHrvPwG0tlvyMOIyftSFj2sd9",
            "name": "7518842528_IMG_3059.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1f38MDGytCUdrbBMqGldHBwVE-oxRpXGt",
            "name": "7518842528_IMG_3022.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "16Ua9_TSjysnIKodODycZQH_NzFaO-76F",
            "name": "7518842528_IMG_3029.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "11ymP06A8GvmKYuS1BhSG7_foJI3XpBpI",
            "name": "7518842528_IMG_3008.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Lklwnst_aIUfN2CmJaynEK6gf8exDmZD",
            "name": "7583930320_IMG_2902.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1Jh_eA4MsCJ7Mxyif2Oj5ODeJmetPvMF_",
            "name": "7518842528_IMG_3007.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "14_Uf3LGkizwYAxVzKjqw5J5ne_CC3IZM",
            "name": "7583930320_IMG_2907.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "10qlSmiMqgXr_y1PYJdPrES1nUGXc-dct",
            "name": "7583930320_IMG_2903.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1xMGJJ__-5HwYhWLx73dkTX9W-U54AEBK",
            "name": "7583930320_IMG_2925.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1GABJUTmjFnAmfipQKdjwsWKrtFIrkyOw",
            "name": "7583930320_IMG_2926.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1oxRe4bXzP5l3MwseqV-EV9KocnIzl3QD",
            "name": "7518842528_IMG_2986.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1ERobH-sdbfH0F0Pgoxc_jgXfto9i7FZO",
            "name": "7583930320_IMG_2931.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1PxyOhL0DRwqMMJ27BmR7IgeSaH5BFasa",
            "name": "7583930320_IMG_2910.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1HqNguV7FgzM-d9RrY4tKjswJ67MoaMyq",
            "name": "7583930320_IMG_2922.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1ANJd7M305McQYQyy8l_9G3a06cp1a6I4",
            "name": "7583930320_IMG_2947.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "13rqV7I6-kj4eVIVAzVqXZJEpZeJEdUDk",
            "name": "7583930320_IMG_2948.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1mlvt9lICm09mTIqPIUKsZc7RxmNadw5o",
            "name": "7583930320_IMG_2943.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1QydpDZaEib5AHxoC3DVXWEWCrNrMOk0a",
            "name": "7583930320_IMG_2928.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1xJtxdDMldwV98HZkvgtJfKBpeRFt-hTc",
            "name": "7583930320_IMG_2954.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1NgFiJ3M3lyOacVp9XQSSRUoorpiuPhw_",
            "name": "7583930320_IMG_2939.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1VdAXGNRMcRprxUVcfk7M-pkCz6oUNI2J",
            "name": "7583930320_IMG_2900.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1J8FNqDyj9ATtkdONkIGkRwNmRdnEH4y8",
            "name": "7583930320_IMG_2906.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1NPWr-hFysG_a7x4lIbM3HpQhkH1OvnSq",
            "name": "7583930320_IMG_2898.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1lvr9upFKkNO_Sq8gRl6YVuCmiH7CiCOd",
            "name": "7583930320_IMG_2904.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "1-kgDLsV_WxAskHTpL_wJkkm1KMUzi8h5",
            "name": "7583930320_IMG_2893.JPG",
            "mimeType": "image/jpeg"
        },
        {
            "kind": "drive#file",
            "id": "12fbDi8sci3KZPo2Au0eWsserlozL3nna",
            "name": "7583930320_IMG_2879.JPG",
            "mimeType": "image/jpeg"
        }
    ]
}

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