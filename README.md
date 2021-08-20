###### ⚠️ Disclaimer: Reverse engineering process is not shown for security concerns. Research purposes only.

# 👏 Reverse engineering of SFR TV DRM service (all channels decrypted)
All channels, including paid channels like sports channels (RMC Sport, beIN SPORTS, Canal, etc.) movies channels or children's channels are decrypted (Widevine, Fairplay and Playready) 🤝


## 📖 Usage:
``npx live-server`` (since JS file is load as a module, opening html file in local will result with a CORS error in most browsers. so use a local server)


### 🚧 Process:
An API I've made returns all channels available for each provider (SFR or Canal) with their URLs, use them to play the channel for differents platforms Windows, Mac, iOS or Android according the DRM (Widevine, Fairplay or Playready) with [Shaka Player](https://github.com/google/shaka-player "Shaka Player Github"), a Javascript player library.

#### 📺 Working demo: https://www.youtube.com/watch?v=bqqmW_CgB_o
<p align="center">
<a href="https://www.youtube.com/watch?v=bqqmW_CgB_o"><img src="https://img.youtube.com/vi/bqqmW_CgB_o/maxresdefault.jpg" width="640" alt="Youtube working demo"/></a>
<img src="https://github.com/rklf/reverse-engineering-drm-channels/blob/main/webapp.png?raw=true" width="640" alt="Web app demo"/>
</p>

#### 🌐 API Example (SFR and Canal):
<p align="center">
<img src="https://github.com/rklf/reverse-engineering-drm-channels/blob/main/sfr.png?raw=true" width="400" alt="SFR API results"/> <img src="https://github.com/rklf/reverse-engineering-drm-channels/blob/main/canal.png?raw=true" width="400" alt="Canal API results"/>
</p>


## 📝 TODO:
- [x] Make sure nothing goes public 🥶
- [ ] Improve web app UI
- [ ] Make it a mobile app (including Chromecast SDK)

###### Feel free to contact me wherever you find me
