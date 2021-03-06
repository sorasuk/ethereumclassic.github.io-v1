import React, { Component } from 'react'

import Dropdown from 'muicss/lib/react/dropdown'
import DropdownItem from 'muicss/lib/react/dropdown-item'

import Github from 'react-icons/lib/fa/github-alt'
import Twitter from 'react-icons/lib/fa/twitter'
import Slack from 'react-icons/lib/fa/slack'
import Reddit from 'react-icons/lib/fa/reddit-alien'
import Telegram from 'react-icons/lib/fa/paper-plane'
import Irc from 'react-icons/lib/fa/terminal'
import Forum from 'react-icons/lib/fa/comments'
import Linkedin from 'react-icons/lib/fa/linkedin-square'

export default class SocialLinks extends Component {
  render () {
    return (
      <Dropdown label="Social Links" className="social-links">
        <DropdownItem link="https://discord.gg/HW4GckH" target="_blank"><Slack className="icon" /> Discord</DropdownItem>
        <DropdownItem link="https://forum.ethereumclassic.org/" target="_blank"><Forum className="icon"/> Forum</DropdownItem>
        <DropdownItem link="https://reddit.com/r/ethereumclassic" target="_blank"><Reddit className="icon" /> Reddit</DropdownItem>
        <DropdownItem link="https://twitter.com/eth_classic" target="_blank"><Twitter className="icon" /> @eth_classic</DropdownItem>
        <DropdownItem link="https://twitter.com/classiciscoming" target="_blank"><Twitter className="icon" /> @ClassicIsComing</DropdownItem>
        <DropdownItem link="https://twitter.com/ETCCooperative" target="_blank"><Twitter className="icon" /> @ETCCooperative</DropdownItem>
        <DropdownItem link="https://github.com/ethereumproject" target="_blank"><Github className="icon" /> Github</DropdownItem>
        <DropdownItem link="http://telegram.me/ethclassic" target="_blank"><Telegram className="icon" /> ETH Classic (English)</DropdownItem>
        <DropdownItem link="http://t.me/etcchat" target="_blank"><Telegram className="icon" /> ETC Chat (English)</DropdownItem>
        <DropdownItem link="http://t.me/etczh" target="_blank"><Telegram className="icon" /> ETC China (Chinese)</DropdownItem>
        <DropdownItem link="http://t.me/ETC_Italia" target="_blank"><Telegram className="icon" /> ETC Italia (Italian)</DropdownItem>
        <DropdownItem link="https://t.me/joinchat/GqAqlRC9hD5bVy65DuHcfg" target="_blank"><Telegram className="icon" />ETC Japan (Japanese)</DropdownItem>
        <DropdownItem link="http://telegram.me/etcrussia" target="_blank"><Telegram className="icon" /> ETC Russia (Russian)</DropdownItem>
        <DropdownItem link="http://telegram.me/etcru" target="_blank"><Telegram className="icon" /> ETC RU (Russian)</DropdownItem>
        <DropdownItem link="https://open.kakao.com/o/gUNOv0K" target="_blank"><Slack className="icon" /> KakaoTalk (South Korea)</DropdownItem>
        <DropdownItem link="http://webchat.freenode.net?channels=ethereumclassic&uio=d4" target="_blank"><Irc className="icon" /> IRC</DropdownItem>
        <DropdownItem link="https://www.linkedin.com/company/ethereum-classic" target="_blank"><Linkedin className="icon" /> LinkedIn</DropdownItem>
      </Dropdown>
    )
  }
}
