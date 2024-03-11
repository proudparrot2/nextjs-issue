import { NextRequest } from 'next/server'

export type Game = {
  id: string
  title: string
  tags?: string[]
  image: string
  url: string
  description?: string
  author?: string
  favorited?: boolean
}
export var games: Game[] = [
  {
    id: 'idlebreakout',
    title: 'Idle Breakout',
    tags: ['featured'],
    description: 'Idle Breakout is a simulator-type game that has the same principle as the game Atari Breakout, but with a twist.',
    url: 'https://assets.3kh0.net/idle-breakout/index.html/',
    image: 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    description: 'A recreation of Rocket League',
    url: 'https://cdn.githubraw.com/carbonsystems-dev/gamevault/main/Rocket-League/index.html',
    image: 'https://www.softgozar.com/Image/Softwares/Thumbnail/Rocket_League_Anniversary_SoftGozar.com.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    tags: ['featured'],
    description: 'An addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'jacksmith',
    title: 'Jacksmith',
    tags: ['featured'],
    description: 'An action role-playing game where you play as a the donkey blacksmith, and forge different kinds of weapons, from powerful axes, hammers, and bows, to swords and other things for your warriors.',
    url: 'https://art-class.github.io/assets/jacksmith',
    image: 'https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot'
  },
  {
    id: 'thereisnogame',
    title: 'There Is No Game',
    description: 'There Is No Game is a unique and humorous puzzle game that challenges players to question the very nature of gaming. Solve unconventional puzzles and enjoy the unexpected twists.',
    url: 'https://assets.3kh0.net/there-is-no-game/index.html',
    image: 'https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    tags: ['featured'],
    description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
    url: 'https://educationgg-23704.web.app/games/FBWG4-main/index.html',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    tags: ['featured'],
    description: 'Drift Boss is an online drift car game. Drive your car past an endless road with perfect timing and avoid falling into space. Beware tricky curves and twists!',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://738501629-461082748261058427.preview.editmysite.com/uploads/b/139890129-817510652323129407/files/drbo.xml'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'A web version of osu!',
    url: 'https://web-osu.github.io/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png'
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    tags: ['featured'],
    description: 'Challenge yourself with logic puzzles, clear levels, and slice through ropes in this fast-paced, candy-filled adventure.',
    url: 'https://assets.3kh0.net/ctr/index.html',
    image: 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    id: 'tombofthemask',
    title: 'Tomb of the Mask',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@9cccb2fafb569c963501a5d818472b561121cea6/totm.xml',
    image: 'https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw'
  },
  {
    id: 'clickerheroes',
    title: 'Clicker Heroes',
    tags: ['featured'],
    url: 'https://www.coolmathgames.com/0-clicker-heroes/play',
    image: 'https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/ClickerHeroes_OG-logo.jpg?itok=vLuljN5G'
  },
  {
    id: 'backrooms',
    title: 'Backrooms',
    description: 'Scary game based on the viral 4Chan post.',
    url: 'https://assets.3kh0.net/backrooms/index.html',
    image: 'https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg'
  },
  {
    id: 'youarebezos',
    title: 'You are Bezos',
    url: 'https://assets.3kh0.net/you-are-bezos/index.html',
    image: 'https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png'
  },
  {
    id: 'papaburgers',
    title: "Papa's Burgeria",
    url: 'https://mazahacka2017.github.io/papas-burgeria',
    image: 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    id: 'papasicecream',
    title: "Papa's Scooperia",
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fpapa-s-scooperia.xml',
    image: 'https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A'
  },
  {
    id: 'ultimatechess',
    title: 'Ultimate Chess',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-chess.xml',
    image: 'https://img.kbhgames.com/2010/05/Ultimate-Chess.jpg'
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    tags: ['featured'],
    url: 'https://assets.3kh0.net/jetpack-joyride/index.html',
    image: 'https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC'
  },
  {
    id: 'shellshockers',
    title: 'Shell Shockers',
    description: 'Shell Shockers is unique online shooter in first-person perspective where all the characters are represented exclusively by eggs.',
    url: 'https://assets.3kh0.net/shellshockers/index.html',
    image: 'https://play-lh.googleusercontent.com/P-nde227L29s8w5U44kTPLiEnMEJUhJpEr4jL6tD6LV65Xz0JZtI4wEyFN-smsNrx-Q'
  },
  {
    id: 'plantsvszombies',
    title: 'Plants Versus Zombies 1.0',
    description: 'Plants Versus Zombies 1.0 is a tower defense video game where players strategically plant a variety of plants to fend off waves of zombie invaders.',
    url: 'https://rawcdn.githack.com/carbonsystems-dev/gamevault/e5a7f73412c800c5f1258c830dc4052cedf27bfa/plants%20vs%20zombies%201/plants%20vs%20zombies.html',
    image: 'https://cm1.narvii.com/6715/5bef9754b89ffbf36e5afb2c4dac9860b9614987_00.jpg'
  },
  {
    id: 'happywheels',
    title: 'Happy Wheels',
    tags: ['featured'],
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/proudparrot2/goguardian/happywheels.xml',
    image: 'https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ'
  },
  {
    id: 'motox3m',
    title: 'MotoX3M',
    tags: ['featured'],
    //url: 'https://assets.3kh0.net/motox3m/index.html',
    url: 'https://art-class.github.io/assets/motox3m',
    image: 'https://play-lh.googleusercontent.com/AbQMuT4ncBfWDqNF-4ubmfaRag59nrW3fJARDsHK51_PENScmWCnMFeQX81wfPlfGBo'
  },
  {
    id: 'thefinalearth',
    title: 'The Final Earth',
    description: "Earth has been destroyed. It's a good thing you teleported to a new planet, also known as The Final Earth. Gather resources and build a colony",
    url: 'https://assets.3kh0.net/the-final-earth/index.html',
    image: 'https://img.itch.zone/aW1nLzIyMTU1NDAucG5n/original/6vGlZe.png'
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    url: 'https://assets.3kh0.net/fridaynightfunkin/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Boyfriend-2.png/250px-Boyfriend-2.png'
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    url: 'https://assets.3kh0.net/paperio2/index.html',
    image: 'https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw'
  },
  {
    id: 'impossiblequiz',
    title: 'The Impossible Quiz',
    url: 'https://proudparrot2.github.io/msg-archive/g_mes/impossiblequiz1/impossiblequiz1/index.html',
    image: 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    id: 'ducklife4',
    title: 'Duck Life 4',
    url: 'https://assets.3kh0.net/ducklife4/index.html',
    image: 'https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM'
  },
  {
    id: 'retrobowl',
    url: 'https://assets.3kh0.net/retro-bowl/index.html',
    title: 'Retro Bowl',
    image: 'https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    tags: ['featured'],
    image: 'https://download.cnet.com/a/img/resize/f5c29f48c4e8e229ce5751314150d856009f51fa/catalog/2017/07/06/5cc976df-d62f-4af1-b07d-a19ccc60e65c/imgingest-9184323196558222635.png?auto=webp&fit=crop&width=64'
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    url: 'https://assets.3kh0.net/temple-run-2/index.html',
    image: 'https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA'
  },
  {
    id: 'stickmanhook',
    title: 'Stickman Hook',
    url: 'https://assets.3kh0.net/stickman-hook/index.html',
    image: 'https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl'
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://coolmathgames.com/0-run-3/play',
    image: 'https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U',
    description: 'Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'justfall',
    title: 'Just Fall',
    description: 'Just Fall is a game similar to Fall Guys, where you compete in minigames to be the sole winner',
    url: 'https://assets.3kh0.net/just-fall/index.html',
    image: 'https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://assets.3kh0.net/sm64/index.html',
    image: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'snowball',
    title: 'snowball.io',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/SQLite4Unity3d@8516fc0bd1d2be662ca484f5dc506268b24763ef/Example/Assets/snowball.xml&',
    image: 'https://play-lh.googleusercontent.com/X8FEOENa_t5mlRllBh2RRLc6sMnPIq56Wxa2ndValDOmwzIRhAv7MG6fT97TLQ2DK48'
  },
  {
    id: 'minecraft',
    title: 'Minecraft Classic',
    url: 'https://assets.3kh0.net/minecraft-classic/index.html',
    image: 'https://cdn.iconscout.com/icon/free/png-256/minecraft-2752120-2284937.png'
  },
  {
    id: 'smashkarts',
    title: 'Smash Karts',
    url: 'https://assets.3kh0.net/d108460237587095c92fe0968f1595f30cf5a5cc/smashkarts/index.html',
    image: 'https://geometry-dash.co/upload/imgs/smash-karts-logo.png'
  },
  {
    id: 'tunnelrush',
    title: 'Tunnel Rush',
    url: 'https://assets.3kh0.net/e00403015397cb588f42d3a461b5ac9503dd7c2d/tunnel-rush/index.html',
    image: 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg'
  },
  {
    id: 'awesometanks2',
    title: 'Awesome Tanks 2',
    url: 'https://assets.3kh0.net/awesometanks2/index.html',
    image: 'https://play-lh.googleusercontent.com/fiH2wSovQkxQ2dQViDAphNBbM0B1dYxTlJqnYwKXeSoQQZbBNkZZuLyMkv4gglb7LH4'
  },
  {
    id: 'fireandice',
    title: 'A Dance of Fire and Ice',
    description: 'A Dance of Fire and Ice is a strict one-button rhythm game. You control two orbiting planets as they travel down a winding path.',
    url: 'https://assets.3kh0.net/a-dance-of-fire-and-ice/index.html',
    image: 'https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ'
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://assets.3kh0.net/escapingtheprison/index.html',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'fleeingthecomplex',
    title: 'Henry Stickmin: Fleeing the Complex',
    url: 'https://art-class.github.io/assets/fleeingthecompound/index.html',
    image: 'https://play-lh.googleusercontent.com/RDk8BpHUESL9J4H-s-07ZC1sNJol8-aZEzz3OEA99PxTYnsZd8038Y-0wRMpCQKDssU'
  },
  {
    id: 'infiltratingtheairship',
    title: 'Henry Stickmin: Infiltrating the Airship',
    url: 'https://art-class.github.io/assets/infiltratingtheairship/index.html',
    image: 'https://play-lh.googleusercontent.com/bRVIDUSlmkDM9ZA9xLczm-PuUa0dYPupAG2ZVNXJvCITc3ZkO7PS-t0qKX1T--7f5-k=w240-h480-rw'
  },
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://mathadventure1.github.io/slope/slope/index.html',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: 'baldisbasics',
    title: "Baldi's Basics",
    url: 'https://assets.3kh0.net/baldis-basics/index.html',
    image: 'https://play-lh.googleusercontent.com/EPV1TB4So1lB0DGrdCVExDpNU8ML67nd8OqBeoOIM-s6sDicxmDdPvCXD6n7LKevFl0'
  },
  {
    id: '1v1lol',
    title: '1v1.lol',
    description: 'Fight to survive in this epic multiplayer building and shooting game where only the last player standing wins and achieves the great and coveted victory.',
    url: 'https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml#',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    url: 'https://assets.3kh0.net/crossyroad/index.html',
    image: 'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://assets.3kh0.net/subway-surfers/index.html',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://assets.3kh0.net/geodash/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'
  },
  {
    id: 'idlecraft',
    title: 'Idlecraft',
    url: 'https://assets.3kh0.net/grindcraft/index.html',
    image: 'https://play-lh.googleusercontent.com/Pl3YYYdxM1Lhe-pXFwaLfmzSpqDZqlzvxS7-BH60Mho_cydWeOCkhTCrSgtMEXL54Cm0'
  },
  {
    id: '8ballpool',
    title: '8 Ball Pool',
    description: '8 Ball Pool is an addictive challenging game based on real 3D pool games, where you will challenge your friends online. Become a master of the pool!',
    url: 'https://8ball-pool.io',
    image: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    url: 'https://assets.3kh0.net/fruitninja/index.html',
    image: 'https://play-lh.googleusercontent.com/iRlGmvtJ524J-gAGdJJchMv-MH-9AuG80TAx8Rv8q3lObiI7kLVZrEvjVOM-yw3BBH4'
  },
  {
    id: 'bloxors',
    title: 'Bloxors',
    description: 'Bloxorz is a very challenging roll puzzle game designed for every one who enjoys logic and math game. The goal of the game is to put the bloxorz to the destination by rolling it.',
    url: 'https://assets.3kh0.net/bloxors/index.html',
    image: 'https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ'
  },
  {
    id: 'chromedino',
    title: 'Chrome Dino Game',
    url: 'https://assets.3kh0.net/chrome-dino/index.html',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq'
  },
  {
    id: 'doodlejump',
    title: 'Doodle Jump',
    url: 'https://doodlejump.io/play/',
    image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg'
  },
  {
    id: 'slither',
    title: 'slither.io',
    url: 'https://slither.io',
    image: 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    id: 'basketballstars',
    title: 'Basketball Stars',
    url: 'https://assets.3kh0.net/d1a97cbddcf69b15adf2ab4a491df717ecf22938/basketball-stars/index.html',
    image: 'https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw'
  },
  {
    id: 'amongus',
    title: 'Among Us',
    url: 'https://assets.3kh0.net/d1a97cbddcf69b15adf2ab4a491df717ecf22938/among-us/index.html',
    image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://assets.3kh0.net/d1a97cbddcf69b15adf2ab4a491df717ecf22938/Rocket-League/index.html',
    image: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://assets.3kh0.net/d1a97cbddcf69b15adf2ab4a491df717ecf22938/bitlife/index.html',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'btd4',
    title: 'Bloons TD 4',
    url: 'https://assets.3kh0.net/d1a97cbddcf69b15adf2ab4a491df717ecf22938/btd4/index.html',
    image: 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    id: 'ovo',
    title: 'OvO',
    url: 'https://purepro4561.github.io/OvO',
    image: 'https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw'
  },
  {
    id: 'dogeminer',
    title: 'Doge Miner',
    url: 'https://assets.3kh0.net/DogeMiner/index.html',
    image: 'https://play-lh.googleusercontent.com/7diC1RZgf6Z5XCspiwJMYD3vQz5TmjFElLw5qnPJZjcjNXgfhepPJzmIBijgraJRd8uv'
  },
  {
    id: 'aquapark',
    title: 'aquapark.io',
    url: 'https://assets.3kh0.net/aquapark-slides/index.html',
    image: 'https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6'
  },
  {
    id: '2048',
    author: 'Gabriele Cirulli',
    description: 'A fun single-player sliding tile puzzle video game. The objective of the game is to slide numbered tiles on a grid to combine them to create a tile with the number 2048.',
    title: '2048',
    url: 'https://assets.3kh0.net/f839d26b4770ba137c399dc1a1c6ccf22e5f3565/2048/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://now.gg/play/roblox-corporation/5349/roblox',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: "EXPERIMENTAL: This may or may not work for you. Please don't report it if it doesn't. If you have bad WiFi, it may load slower than usual."
  },
  {
    id: 'baconmaydie',
    title: 'Bacon May Die',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/c1832d589bc39c298bd23149733fca1026972d06/2/e333d315-40d0-46f6-a1ef-7e3f6bdd5113/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/c1832d589bc39c298bd23149733fca1026972d06/thumb/e333d315-40d0-46f6-a1ef-7e3f6bdd5113.jpg',
    description: 'Warning: pressing ESC will exit the game.'
  },
  {
    id: 'burninrubber5xs',
    title: "Burnin' Rubber 5 XS",
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/1/c35dc918-139e-4159-be3d-0d1ef0557e4e/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/c35dc918-139e-4159-be3d-0d1ef0557e4e.jpg',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'funnyshooter2',
    title: 'Funny Shooter 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/1/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df.jpg',
    description: 'This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.'
  },
  {
    id: 'hydrostorm2',
    title: 'Hydro Storm 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/1/283a1142-4fa3-46c4-8a3f-35ac3a28f072/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/283a1142-4fa3-46c4-8a3f-35ac3a28f072.jpg',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'pixwars2',
    title: 'PixWars 2',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/1/c4e5b82d-a26a-437b-8b6e-7598c98cf39b/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/c4e5b82d-a26a-437b-8b6e-7598c98cf39b.jpg',
    description: 'An error is displayed during startup. It can be ignored, the game still works.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/b0687b5099af0b76aedf37743f2d03cbeef26467/2/5cf218d2-f550-420c-8e55-7029efc5b4db/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/5cf218d2-f550-420c-8e55-7029efc5b4db.jpg'
  },
  {
    id: 'vex8',
    title: 'Vex 8',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/2/6dcc5fd9-a43a-4e13-9b6f-456a416e1059/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6dcc5fd9-a43a-4e13-9b6f-456a416e1059.jpg'
  },
  {
    id: 'ballsandbricks',
    title: 'Balls and Bricks',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://35310661-713299160685702142.preview.editmysite.com/uploads/b/1285710-351987768514667200/files/bab.xml&',
    image: 'https://play-lh.googleusercontent.com/UsshQ3HeLzgMLEW9PnpCuMM7gwL0Gdkw-iZdUlekzlHjFaYufWnkaZbmQbSrnqJuew'
  },
  {
    id: 'thefinalearth2',
    title: 'The Final Earth 2',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://529473016-184630684593625815.preview.editmysite.com/uploads/b/139890129-811652923688457694/files/tfe2.xml&',
    image: 'https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q'
  },
  {
    id: 'snowrider',
    title: 'Snow Rider 3D',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/89574567@71f165531792ae450fe0a522a52ba4e827344de2/sr3d.xml',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/f6/78/0b/f6780bae-e66a-9254-21d0-a50057f97f01/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/434x0w.webp'
  },
  {
    id: '1on1basketball',
    title: '1 On 1 Basketball',
    url: 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F1-on-1-basketball.xml',
    image: 'https://tgkathletics.com/wp-content/uploads/2020/01/1-on-1-Bball-5.jpg'
  },
  {
    id: 'johnnyupgrade',
    title: 'Johnny Upgrade',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/f107b843-3661-4036-9397-2b0c6414a369%2Fjohnny-upgrade.xml',
    image: 'https://lh3.googleusercontent.com/s7lez6G5aX7hJweNeC10BZpq_7_xJukeAjAa3CrjrVCGJDOFKWotgJHhRYwGVUV1C9WPwpC98T1xgRWxGez1ox8=w1280'
  },
  {
    id: 'holeio',
    title: 'Hole.io',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@93a27eabbbe5eb626af5b9b7dd0926ac16810a41/Code/Java/hole.xml',
    image: 'https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w'
  },
  {
    id: 'penguinio',
    title: 'Penguin.io',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Kubeflow@a4cad845becd2a794dc59bbf5bfff375c5dae041/admission-webhook/examples/penguin.xml',
    image: 'https://play-lh.googleusercontent.com/YsT4stD48fWw0XuIT87ilZtBfTkOGlxj3PpWI9qeFUkrvpu1xjemXzqf12DxBvv-Ikk'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/139948058740159493/files/index.html',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  },
  {
    id: 'digtochina',
    title: 'Dig to China',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fdig-to-china.xml',
    image: 'https://play-lh.googleusercontent.com/R1o8_AuZ53wC5Q60ZKoGBdIXjm4v7k99uGW1Lb8NFk58MeAO_e-IqcOxdPnjOK90'
  },
  {
    id: 'helixjump',
    title: 'Helix Jump',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@147a37a734f3e4f155e48dbda25000afdc2970ba/Apps/Helix.xml',
    image: 'https://play-lh.googleusercontent.com/cZHORa1z78dfMsP_nxCkplmHGUx5wfjY0x2jK59GWL7rUL5o6c_KiQ7QL9o4T22qbH8'
  },
  {
    id: 'papafreezeria',
    title: "Papa's Freezeria",
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fpapa-s-freezeria.xml',
    image: 'https://play-lh.googleusercontent.com/pHHCQat6QfO9dJMrRLRAlP-v9y98iI9lDx2oJ_Y8jho9AJQafQezJJYgWxzfuY9QRaw'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://slopegame.io/curve-ball-3d.embed',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'infinitecraft',
    title: 'Infinite Craft',
    url: 'https://neal.fun/infinite-craft',
    image: 'https://neal.fun/share-cards/infinite-craft.png'
  }
]

games = games.sort(function (a, b) {
  return a.title.localeCompare(b.title)
})

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('game')
  if (id) {
    return Response.json(games.find((game) => game.id == id) || {})
  }
  return Response.json(games)
}
