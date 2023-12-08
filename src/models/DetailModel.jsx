import { SiBitcoin } from "react-icons/si";
import {MdEventAvailable, MdPriceChange} from 'react-icons/md'
import { FaPercent } from 'react-icons/fa';
import {RiStockFill} from 'react-icons/ri'

export class DetailModel {
    constructor(coin,history) {
        this.coin=coin;

        //arayüz kutuları için veriyi hazırla
        this.infoFields = [
            {
                icon:<SiBitcoin />,
                label: 'Market Hacmi',
                value: this.coin?.marketCapUsd
            },
            {
                icon: <MdEventAvailable/>,
                label:'Tedarik',
                value: this.coin?.supply
            },
            {
                icon: <MdPriceChange/>,
                label:'Fiyat',
                value: this.coin?.priceUsd
            },
            {
                icon: <FaPercent/>,
                label:'24s Değişim (%)',
                value: this.coin?.changePercent24Hr
            },
            {
                icon: <RiStockFill/>,
                label:'24s Hacim',
                value: this.coin?.volumeUsd24Hr
            }
        ]
    }
} 