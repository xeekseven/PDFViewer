<template>
    <div class="common-column common-main-start main-rank">
        <div class="common-row common-main-between " style="height:4rem;background-color:#F1F1F1">
            <div class="common-row common-main-start">
                <div class="common-row common-main-center common-align-center" style="font-size:2rem;padding:1rem 0rem 1rem 1rem">
                    搜
                </div>
                <div class="common-column common-main-start" style="padding:0.5rem;">
                    <div class="common-row common-main-center common-align-center">
                        索风云榜
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        <div class="common-row common-between">
            <div class="common-column common-main-center radio-div" style="background-color: #35b3ee;color: #fff">
                PDF
            </div>
            <div class="common-column common-main-center radio-div" style="width:50%;height:2.5rem">
                软件
            </div>
        </div>
        <div class="box">
            <div>
                <ul style="margin-top:0.2rem;">
                    <li v-for="item in rankList" class="common-row common-main-start rankUl">
                        <span class="rankNum">{{ item.rankItemNo }}</span><span class="rankName">{{ item.rankItemName }}</span>
                        <span class="rankOther"><i v-if="item.rankItemHot === 0" class="uk-icon-level-up" style="color:green"></i></span>
                    </li>
                    <li class="common-row common-main-start rankUl rankEnd">
                        <a >更多排行结果</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            rankList:[
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 },
                { rankItemNo: 1, rankItemName:'算法第四版', ranKItemHot: 0 }
                ]
        }
    }
}
</script>

<style scoped>
    .boxx {
        border: 0.14rem solid #6495ED;
        box-sizing: border-box;
    }
    .main-rank {
        border-left: 0.1rem solid #fff;
        border-right: 0.7rem solid #fff;
    }
    .radio-div {
        width: 50%;
        height: 2.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        
    }
    .rankUl{
        padding: 0.45rem 0.7rem;
        margin:0;
        border-bottom : 0.14rem solid #fff;
        box-sizing: border-box;
    }
    .rankUl li{
        list-style-type: none;
        
    }
    .rankNum{
        font-size: 1.5rem;
        width: 25%;
        color:red;
        /*margin: 0 0.7rem;*/
        font-style: italic
    }
    .rankName{
        width: 50%;
        text-align: left;
    }
    .rankOther{
        width: 25%;
    }
    .rankEnd{
        text-align: center;

    }
</style>

