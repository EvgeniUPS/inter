<template>
  
  <v-container fluid grid-list-md>
    
    <!-- <input box clearable type="text" class="form-control" placeholder="Поиск" aria-label="Username" aria-describedby="basic-addon1"  v-model="searchName" autofocus> -->

        <v-flex md12>
          <v-text-field
            v-model="searchName"
            box
            label="Поиск"
            clearable
          ></v-text-field>
          <v-btn @click= "searchName = ''" block>reset</v-btn>
        </v-flex>

    <v-layout row wrap>
    <v-flex v-if="name.showItem == 1" d-flex md12 lg6 v-for="name in filteredNames" :key="name.id">
       <v-card  >
          <v-card-title primary-title >
          <div>
            <div class="headline "> {{name.description}} <br> {{name.art}} </div>
            <!-- <p class="text-xs-right grey--text">{{name.id}} </p> -->
            <p>Код товара: {{name.id}} </p>
          </div>
        </v-card-title>
        <v-card-media
          :src="name.image"
          height="500px"

        
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline"> ... </div>
            <span class="grey--text">Цена: {{name.firstPrice | price}} грн. </span>
              <v-spacer></v-spacer>
            <span class="red--text headline">После скидки: {{name.finalPrice | price}} грн. </span>
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{name.art}}
          </v-card-text>
        </v-slide-y-transition> -->
      </v-card>
    </v-flex>
     </v-layout>

    

  </v-container>
  </template>

<script>
export default {
  data() {
    return {
      show: false,
      dialog: false,
      //////

      names: [
        /////////////////        


{id: '164939', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A800 70007706', art: '385', stock: '4', firstPrice : '1528', finalPrice: '1146', image : '/static/img/products/164939.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142191', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 15CT', art: '029 ноги 18', stock: '1', firstPrice : '35648', finalPrice: '26736', image : '/static/img/products/142191.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142192', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 15CT', art: '017 ноги 18', stock: '1', firstPrice : '50009', finalPrice: '37506.75', image : '/static/img/products/142192.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142193', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 15CT', art: '016 ноги 18', stock: '1', firstPrice : '50009', finalPrice: '37506.75', image : '/static/img/products/142193.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142194', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 10BK', art: '003 ноги 18', stock: '1', firstPrice : '42268', finalPrice: '31701', image : '/static/img/products/142194.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142195', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 10BK', art: '008 ноги 18', stock: '4', firstPrice : '90851', finalPrice: '68138.25', image : '/static/img/products/142195.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142197', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 10BS', art: 'А399  вер. 008 матрас SPRING MATT. H12 L182 LAR 142 T. G.B', stock: '1', firstPrice : '8021', finalPrice: '6015.75', image : '/static/img/products/142197.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163240', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 10BS', art: '003 ноги 18', stock: '1', firstPrice : '42268', finalPrice: '31701', image : '/static/img/products/163240.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142057', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 10BS', art: '008 ноги 18', stock: '2', firstPrice : '90851', finalPrice: '68138.25', image : '/static/img/products/142057.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163267', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 15WE-CS', art: '003', stock: '1', firstPrice : '45324', finalPrice: '33993', image : '/static/img/products/163267.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '95388', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A399 Vella 15WE-CS', art: '008', stock: '1', firstPrice : '95841', finalPrice: '71880.75', image : '/static/img/products/95388.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159054', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A450 10KM', art: '003 ноги 09', stock: '3', firstPrice : '37787', finalPrice: '28340.25', image : '/static/img/products/159054.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142056', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A450 10KM', art: '004 ноги 09', stock: '1', firstPrice : '45731', finalPrice: '34298.25', image : '/static/img/products/142056.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163269', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A450 10KM', art: '027 ноги 09', stock: '1', firstPrice : '88508', finalPrice: '66381', image : '/static/img/products/163269.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163245', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'A921 70007703 welt 70007706', art: '253', stock: '1', firstPrice : '15074', finalPrice: '11305.5', image : '/static/img/products/163245.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163275', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'A130LB0  corner  50x50x45 coffee oak', stock: '1', firstPrice : '5704', finalPrice: '4278', image : '/static/img/products/163275.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163274', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'A130LN0 Noci smoked oak', stock: '1', firstPrice : '5704', finalPrice: '4278', image : '/static/img/products/163274.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162316', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'A131LN0  tray 40x50x45 walnut', stock: '1', firstPrice : '8556', finalPrice: '6417', image : '/static/img/products/162316.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142188', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'A131LB0 Conversano smoked oak', stock: '1', firstPrice : '8556', finalPrice: '6417', image : '/static/img/products/142188.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164941', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T152M5R Novello 50 h37', stock: '1', firstPrice : '10287', finalPrice: '7715.25', image : '/static/img/products/164941.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164910', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T152M52 Novello 60 h37', stock: '1', firstPrice : '11815', finalPrice: '8861.25', image : '/static/img/products/164910.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163237', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T153LR3 Amarone brown oak/smoke', stock: '1', firstPrice : '22306', finalPrice: '16729.5', image : '/static/img/products/163237.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163838', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T152M55 Novello 100 h37', stock: '1', firstPrice : '25056', finalPrice: '18792', image : '/static/img/products/163838.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163239', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R863VQX Sahara 200*300 taupe', stock: '1', firstPrice : '26176', finalPrice: '19632', image : '/static/img/products/163239.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162317', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R863VEX Sahara 200*300 rope', stock: '1', firstPrice : '26176', finalPrice: '19632', image : '/static/img/products/162317.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136766', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R863VNX Sahara 200*300 beige', stock: '2', firstPrice : '26176', finalPrice: '19632', image : '/static/img/products/136766.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '160094', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T145LY3 Merlot white oak', stock: '1', firstPrice : '26481', finalPrice: '19860.75', image : '/static/img/products/160094.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '160095', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'A128LB3 OSTUNI COFFEE OAK 75 X120 H33', stock: '1', firstPrice : '28111', finalPrice: '21083.25', image : '/static/img/products/160095.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164564', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'A128LN3 OSTUNI WALNUT 75X120 H33', stock: '2', firstPrice : '28111', finalPrice: '21083.25', image : '/static/img/products/164564.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162769', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R855TGX Mad man 200*280 grey', stock: '1', firstPrice : '29537', finalPrice: '22152.75', image : '/static/img/products/162769.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162774', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R855THX Mad man 200*280 gold', stock: '1', firstPrice : '29537', finalPrice: '22152.75', image : '/static/img/products/162774.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163535', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R856TGX Mad man 200*280 grey', stock: '1', firstPrice : '29537', finalPrice: '22152.75', image : '/static/img/products/163535.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164582', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'Carpet R857TIX Old kilim 200*280 rust', stock: '1', firstPrice : '29537', finalPrice: '22152.75', image : '/static/img/products/164582.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164907', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T125LN4  ALBEROBELLO  Coffee table canaletto waltut    80x120xH35', stock: '1', firstPrice : '32389', finalPrice: '24291.75', image : '/static/img/products/164907.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163196', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'accents', art: 'T144LLB Chianti canaletto walnut/coffee', stock: '1', firstPrice : '35139', finalPrice: '26354.25', image : '/static/img/products/163196.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163236', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B530 70004604 15ZA(был 106A)', art: '018 ноги 18', stock: '2', firstPrice : '54826', finalPrice: '41119.5', image : '/static/img/products/163236.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163258', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B530 70004604 15ZA(был 106A)', art: '201 ноги 18', stock: '2', firstPrice : '65154', finalPrice: '48865.5', image : '/static/img/products/163258.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163276', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B536 1571', art: '003 ноги 18', stock: '1', firstPrice : '37960', finalPrice: '28470', image : '/static/img/products/163276.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163241', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B536 1571', art: '266 ноги 18', stock: '4', firstPrice : '102054', finalPrice: '76540.5', image : '/static/img/products/163241.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '160100', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B536 15GS', art: '003 ноги 18', stock: '5', firstPrice : '37960', finalPrice: '28470', image : '/static/img/products/160100.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162318', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B592 15WC', art: '085 ноги 18', stock: '1', firstPrice : '72640', finalPrice: '54480', image : '/static/img/products/162318.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136770', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B592 15WC', art: '268 ноги 18', stock: '1', firstPrice : '78863', finalPrice: '59147.25', image : '/static/img/products/136770.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136771', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B608 10KG', art: '003 ноги 18', stock: '10', firstPrice : '42910', finalPrice: '32182.5', image : '/static/img/products/136771.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163273', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B608 10KG', art: '265 ноги 18', stock: '1', firstPrice : '86553', finalPrice: '64914.75', image : '/static/img/products/163273.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '160108', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B618 15IC', art: '446', stock: '1', firstPrice : '138629', finalPrice: '103971.75', image : '/static/img/products/160108.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163288', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 10BL', art: '003 ноги 18', stock: '1', firstPrice : '37176', finalPrice: '27882', image : '/static/img/products/163288.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163289', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 10BL', art: '004 ноги 18', stock: '2', firstPrice : '44102', finalPrice: '33076.5', image : '/static/img/products/163289.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163290', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 10BL', art: '008 ноги 18', stock: '1', firstPrice : '86166', finalPrice: '64624.5', image : '/static/img/products/163290.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '110760', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 10BT-CS', art: '004 ноги 18', stock: '2', firstPrice : '44102', finalPrice: '33076.5', image : '/static/img/products/110760.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163226', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 10BT-CS', art: '008 ноги 18', stock: '1', firstPrice : '86166', finalPrice: '64624.5', image : '/static/img/products/163226.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163272', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 15WF', art: '003', stock: '1', firstPrice : '40028', finalPrice: '30021', image : '/static/img/products/163272.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '88735', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B627 Timone 15WF', art: '008', stock: '1', firstPrice : '90953', finalPrice: '68214.75', image : '/static/img/products/88735.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136767', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B637 Olivia 10BH', art: '004 ноги 18', stock: '2', firstPrice : '41250', finalPrice: '30937.5', image : '/static/img/products/136767.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130894', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B637 Olivia 10KQ', art: '003 ноги 18', stock: '2', firstPrice : '33509', finalPrice: '25131.75', image : '/static/img/products/130894.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164578', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B637 Olivia 10KQ', art: '004 ноги 18', stock: '4', firstPrice : '41046', finalPrice: '30784.5', image : '/static/img/products/164578.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163182', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B637 Olivia 10KQ', art: '008 ноги 18', stock: '3', firstPrice : '74962', finalPrice: '56221.5', image : '/static/img/products/163182.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163885', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B645 15GG', art: '113', stock: '2', firstPrice : '6234', finalPrice: '4675.5', image : '/static/img/products/163885.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '142180', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B668 10KA', art: '003 ноги 18', stock: '1', firstPrice : '44499', finalPrice: '33374.25', image : '/static/img/products/142180.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '147641', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B668 10KC', art: '003 ноги 09', stock: '1', firstPrice : '44499', finalPrice: '33374.25', image : '/static/img/products/147641.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164573', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B668 10KC', art: '004 ноги 09', stock: '1', firstPrice : '48817', finalPrice: '36612.75', image : '/static/img/products/164573.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163852', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GE-CS', art: '000', stock: '1', firstPrice : '49347', finalPrice: '37010.25', image : '/static/img/products/163852.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136774', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GE-CS', art: '002', stock: '4', firstPrice : '49347', finalPrice: '37010.25', image : '/static/img/products/136774.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163284', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GE-CS', art: '076', stock: '1', firstPrice : '52402', finalPrice: '39301.5', image : '/static/img/products/163284.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163285', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GE-CS', art: '277', stock: '4', firstPrice : '69167', finalPrice: '51875.25', image : '/static/img/products/163285.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163286', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GE-CS', art: '279', stock: '1', firstPrice : '69167', finalPrice: '51875.25', image : '/static/img/products/163286.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163287', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GE-CS', art: '174', stock: '5', firstPrice : '75594', finalPrice: '56695.5', image : '/static/img/products/163287.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162771', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GN', art: '000 ноги 18', stock: '1', firstPrice : '49347', finalPrice: '37010.25', image : '/static/img/products/162771.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130889', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GN', art: '002 ноги 18', stock: '3', firstPrice : '49347', finalPrice: '37010.25', image : '/static/img/products/130889.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163224', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GN', art: '076 ноги 18', stock: '1', firstPrice : '52402', finalPrice: '39301.5', image : '/static/img/products/163224.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164908', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GN', art: '028 ноги 18', stock: '4', firstPrice : '57464', finalPrice: '43098', image : '/static/img/products/164908.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164567', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GN', art: '277 ноги 18', stock: '3', firstPrice : '69167', finalPrice: '51875.25', image : '/static/img/products/164567.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164655', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B684 15GN', art: '279 ноги 18', stock: '1', firstPrice : '69167', finalPrice: '51875.25', image : '/static/img/products/164655.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159865', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B693 10KS', art: '003 ноги 18', stock: '2', firstPrice : '42278', finalPrice: '31708.5', image : '/static/img/products/159865.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159872', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B693 10KS', art: '037 ноги 18', stock: '1', firstPrice : '88243', finalPrice: '66182.25', image : '/static/img/products/159872.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163872', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B708 2549', art: '154 ноги 18', stock: '2', firstPrice : '81287', finalPrice: '60965.25', image : '/static/img/products/163872.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '161889', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B708 2549', art: '009 ноги 18', stock: '2', firstPrice : '104794', finalPrice: '78595.5', image : '/static/img/products/161889.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164909', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B735 10BS-CS', art: '003 ноги 18', stock: '1', firstPrice : '34477', finalPrice: '25857.75', image : '/static/img/products/164909.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '157899', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B735 10BS-CS', art: '200 ноги 18', stock: '4', firstPrice : '59674', finalPrice: '44755.5', image : '/static/img/products/157899.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '157903', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B735 10BS-CS', art: '025 ноги 18', stock: '4', firstPrice : '74015', finalPrice: '55511.25', image : '/static/img/products/157903.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163190', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B741 10BF', art: '003 ноги 18', stock: '1', firstPrice : '29843', finalPrice: '22382.25', image : '/static/img/products/163190.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163244', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B741 10BF', art: '034 ноги 18', stock: '1', firstPrice : '40435', finalPrice: '30326.25', image : '/static/img/products/163244.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130897', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B741 10BF', art: '037 ноги 18', stock: '4', firstPrice : '71703', finalPrice: '53777.25', image : '/static/img/products/130897.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163203', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B757  20JJ', art: '003 ноги 18', stock: '1', firstPrice : '43185', finalPrice: '32388.75', image : '/static/img/products/163203.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113217', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B757  20JJ', art: '154 ноги 18', stock: '1', firstPrice : '56018', finalPrice: '42013.5', image : '/static/img/products/113217.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136358', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B757  20JJ', art: '264 ноги 18', stock: '1', firstPrice : '98388', finalPrice: '73791', image : '/static/img/products/136358.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136359', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B795 15CK-CS', art: '193', stock: '1', firstPrice : '122017', finalPrice: '91512.75', image : '/static/img/products/136359.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136579', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B795 15CK-CS', art: '446', stock: '1', firstPrice : '133322', finalPrice: '99991.5', image : '/static/img/products/136579.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163271', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B795 15CW', art: '003', stock: '1', firstPrice : '52351', finalPrice: '39263.25', image : '/static/img/products/163271.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159111', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B816 10BT/10KS', art: '003 ноги 18', stock: '2', firstPrice : '57149', finalPrice: '42861.75', image : '/static/img/products/159111.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163243', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B816 10BT/10KS', art: '264 ноги 18', stock: '2', firstPrice : '140737', finalPrice: '105552.75', image : '/static/img/products/163243.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159870', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BF', art: '000', stock: '2', firstPrice : '34691', finalPrice: '26018.25', image : '/static/img/products/159870.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159878', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BF', art: '002', stock: '2', firstPrice : '34691', finalPrice: '26018.25', image : '/static/img/products/159878.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163871', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BF', art: '029', stock: '4', firstPrice : '39539', finalPrice: '29654.25', image : '/static/img/products/163871.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130885', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BF', art: '003', stock: '2', firstPrice : '46495', finalPrice: '34871.25', image : '/static/img/products/130885.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102716', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BF', art: '024', stock: '2', firstPrice : '83395', finalPrice: '62546.25', image : '/static/img/products/102716.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '157911', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BF', art: '015', stock: '1', firstPrice : '97410', finalPrice: '73057.5', image : '/static/img/products/157911.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163078', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BH', art: '002', stock: '2', firstPrice : '34691', finalPrice: '26018.25', image : '/static/img/products/163078.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102700', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BH', art: '029', stock: '2', firstPrice : '39539', finalPrice: '29654.25', image : '/static/img/products/102700.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '121902', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BH', art: '003', stock: '2', firstPrice : '46495', finalPrice: '34871.25', image : '/static/img/products/121902.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164911', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BH', art: '024', stock: '2', firstPrice : '83395', finalPrice: '62546.25', image : '/static/img/products/164911.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136364', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835  10BH', art: '015', stock: '1', firstPrice : '97410', finalPrice: '73057.5', image : '/static/img/products/136364.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136584', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BF', art: '002', stock: '4', firstPrice : '31981', finalPrice: '23985.75', image : '/static/img/products/136584.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163075', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BF', art: '029', stock: '2', firstPrice : '36768', finalPrice: '27576', image : '/static/img/products/163075.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163191', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BF', art: '024', stock: '4', firstPrice : '85860', finalPrice: '64395', image : '/static/img/products/163191.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163853', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BH', art: '000', stock: '1', firstPrice : '31981', finalPrice: '23985.75', image : '/static/img/products/163853.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163854', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BH', art: '029', stock: '1', firstPrice : '36768', finalPrice: '27576', image : '/static/img/products/163854.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130890', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BH', art: '003', stock: '1', firstPrice : '43083', finalPrice: '32312.25', image : '/static/img/products/130890.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163874', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B835 Nuvola 10BH', art: '025', stock: '1', firstPrice : '85860', finalPrice: '64395', image : '/static/img/products/163874.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163081', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B842 15CU/15CK', art: '003 ноги 18', stock: '6', firstPrice : '49194', finalPrice: '36895.5', image : '/static/img/products/163081.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130898', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B842 15CU/15CK', art: '264 ноги 18', stock: '1', firstPrice : '118452', finalPrice: '88839', image : '/static/img/products/130898.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159088', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B842 Olante 10BG/10BK', art: '262 ноги 18', stock: '1', firstPrice : '87897', finalPrice: '65922.75', image : '/static/img/products/159088.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163231', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10BF WELT 10ZE', art: '003', stock: '1', firstPrice : '37889', finalPrice: '28416.75', image : '/static/img/products/163231.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130882', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10BF WELT 10ZE', art: '004', stock: '1', firstPrice : '45629', finalPrice: '34221.75', image : '/static/img/products/130882.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '133793', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10BF WELT 10ZE', art: '264', stock: '1', firstPrice : '85860', finalPrice: '64395', image : '/static/img/products/133793.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '121908', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10BT  WELT10BH', art: '003', stock: '1', firstPrice : '37889', finalPrice: '28416.75', image : '/static/img/products/121908.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '95396', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10BT  WELT10BH', art: '264', stock: '1', firstPrice : '85860', finalPrice: '64395', image : '/static/img/products/95396.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159874', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10ZC WELT 10BH', art: '154', stock: '1', firstPrice : '51842', finalPrice: '38881.5', image : '/static/img/products/159874.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134397', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 10ZC WELT 10BH', art: '264', stock: '1', firstPrice : '85860', finalPrice: '64395', image : '/static/img/products/134397.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130886', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 15WI WELT 15CU', art: '003', stock: '1', firstPrice : '40944', finalPrice: '30708', image : '/static/img/products/130886.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '158547', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 15WI WELT 15CU', art: '004', stock: '1', firstPrice : '48888', finalPrice: '36666', image : '/static/img/products/158547.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163197', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 15WI WELT 15CU', art: '264', stock: '1', firstPrice : '90749', finalPrice: '68061.75', image : '/static/img/products/163197.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '107839', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B865 20RH', art: '004', stock: '1', firstPrice : '52453', finalPrice: '39339.75', image : '/static/img/products/107839.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '110498', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B883 15WQ', art: '530', stock: '1', firstPrice : '107249', finalPrice: '80436.75', image : '/static/img/products/110498.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163071', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B888 15H2', art: '019', stock: '1', firstPrice : '59379', finalPrice: '44534.25', image : '/static/img/products/163071.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163088', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B888 15H2', art: '200', stock: '1', firstPrice : '66610', finalPrice: '49957.5', image : '/static/img/products/163088.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163851', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 10BK', art: '016', stock: '1', firstPrice : '62333', finalPrice: '46749.75', image : '/static/img/products/163851.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102802', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 10BK', art: '017', stock: '1', firstPrice : '62333', finalPrice: '46749.75', image : '/static/img/products/102802.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163842', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15GG', art: '100', stock: '1', firstPrice : '20167', finalPrice: '15125.25', image : '/static/img/products/163842.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136360', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15GG', art: '001', stock: '2', firstPrice : '29639', finalPrice: '22229.25', image : '/static/img/products/136360.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136580', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15GG', art: '016', stock: '1', firstPrice : '66407', finalPrice: '49805.25', image : '/static/img/products/136580.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163225', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15GG', art: '017', stock: '1', firstPrice : '66407', finalPrice: '49805.25', image : '/static/img/products/163225.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164562', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15WN', art: '100', stock: '2', firstPrice : '20167', finalPrice: '15125.25', image : '/static/img/products/164562.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163198', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15WN', art: '272', stock: '1', firstPrice : '52453', finalPrice: '39339.75', image : '/static/img/products/163198.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '110499', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15WN', art: '274', stock: '1', firstPrice : '52453', finalPrice: '39339.75', image : '/static/img/products/110499.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163089', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15WQ', art: '100', stock: '1', firstPrice : '20167', finalPrice: '15125.25', image : '/static/img/products/163089.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134403', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15WQ', art: '016', stock: '1', firstPrice : '66407', finalPrice: '49805.25', image : '/static/img/products/134403.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102704', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B895 15WQ', art: '017', stock: '1', firstPrice : '66407', finalPrice: '49805.25', image : '/static/img/products/102704.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102705', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B944 15CI', art: 'E44', stock: '1', firstPrice : '90749', finalPrice: '68061.75', image : '/static/img/products/102705.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113236', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B985 15CY', art: '005', stock: '1', firstPrice : '45731', finalPrice: '34298.25', image : '/static/img/products/113236.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113237', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B985 15CY', art: '064', stock: '1', firstPrice : '60805', finalPrice: '45603.75', image : '/static/img/products/113237.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136768', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B985 15WP', art: '009', stock: '1', firstPrice : '53777', finalPrice: '40332.75', image : '/static/img/products/136768.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159109', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B985 15WP', art: '064', stock: '1', firstPrice : '60805', finalPrice: '45603.75', image : '/static/img/products/159109.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159110', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B986 20RI', art: '291', stock: '1', firstPrice : '33509', finalPrice: '25131.75', image : '/static/img/products/159110.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163195', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B986 20RI', art: '450', stock: '1', firstPrice : '67323', finalPrice: '50492.25', image : '/static/img/products/163195.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163949', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B986 20RI', art: '452', stock: '1', firstPrice : '67323', finalPrice: '50492.25', image : '/static/img/products/163949.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164720', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 10BF welt 10BF', art: '450', stock: '1', firstPrice : '51944', finalPrice: '38958', image : '/static/img/products/164720.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163187', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 10BF welt 10BF', art: '535', stock: '1', firstPrice : '100832', finalPrice: '75624', image : '/static/img/products/163187.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102707', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 15CI', art: '323', stock: '1', firstPrice : '20880', finalPrice: '15660', image : '/static/img/products/102707.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113239', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 15CI', art: '338', stock: '1', firstPrice : '44305', finalPrice: '33228.75', image : '/static/img/products/113239.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163533', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 15CI', art: '011', stock: '1', firstPrice : '47972', finalPrice: '35979', image : '/static/img/products/163533.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163534', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 15CI', art: '400', stock: '1', firstPrice : '50213', finalPrice: '37659.75', image : '/static/img/products/163534.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163862', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 15CI', art: '537', stock: '1', firstPrice : '120082', finalPrice: '90061.5', image : '/static/img/products/163862.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '88734', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 70007703 welt 70007706', art: '323', stock: '1', firstPrice : '15482', finalPrice: '11611.5', image : '/static/img/products/88734.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163847', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 70007703 welt 70007706', art: '291', stock: '1', firstPrice : '20370', finalPrice: '15277.5', image : '/static/img/products/163847.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164566', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 70007703 welt 70007706', art: '011', stock: '1', firstPrice : '30759', finalPrice: '23069.25', image : '/static/img/products/164566.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '88125', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 70007703 welt 70007706', art: '338', stock: '1', firstPrice : '32592', finalPrice: '24444', image : '/static/img/products/88125.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134398', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 70007703 welt 70007706', art: '452', stock: '1', firstPrice : '39009', finalPrice: '29256.75', image : '/static/img/products/134398.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164590', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'B995 70007703 welt 70007706', art: '534', stock: '1', firstPrice : '80156', finalPrice: '60117', image : '/static/img/products/164590.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162045', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C005 15WN', art: '064', stock: '1', firstPrice : '72416', finalPrice: '54312', image : '/static/img/products/162045.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162046', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C005 15WP', art: '003', stock: '2', firstPrice : '41555', finalPrice: '31166.25', image : '/static/img/products/162046.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134400', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C008 1575', art: '011', stock: '1', firstPrice : '33407', finalPrice: '25055.25', image : '/static/img/products/134400.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102706', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C008 1575', art: '016', stock: '1', firstPrice : '40129', finalPrice: '30096.75', image : '/static/img/products/102706.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163850', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C008 1575', art: '537', stock: '1', firstPrice : '100425', finalPrice: '75318.75', image : '/static/img/products/163850.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164577', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C013 20JX', art: '291 feet78', stock: '1', firstPrice : '31778', finalPrice: '23833.5', image : '/static/img/products/164577.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164580', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C013 20JX', art: '049 feet78', stock: '1', firstPrice : '63351', finalPrice: '47513.25', image : '/static/img/products/164580.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163860', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C013 20JX', art: '450 feet78', stock: '1', firstPrice : '78527', finalPrice: '58895.25', image : '/static/img/products/163860.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113214', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C015 1575', art: '113', stock: '1', firstPrice : '9676', finalPrice: '7257', image : '/static/img/products/113214.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163841', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C015 1575', art: '621', stock: '1', firstPrice : '33407', finalPrice: '25055.25', image : '/static/img/products/163841.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163845', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C015 1575', art: '011', stock: '1', firstPrice : '36157', finalPrice: '27117.75', image : '/static/img/products/163845.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164572', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C018 15CY', art: '049', stock: '1', firstPrice : '72416', finalPrice: '54312', image : '/static/img/products/164572.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164575', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C018 15CY', art: '216', stock: '1', firstPrice : '79342', finalPrice: '59506.5', image : '/static/img/products/164575.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164593', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JN', art: '001', stock: '1', firstPrice : '26481', finalPrice: '19860.75', image : '/static/img/products/164593.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164902', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JN', art: '291', stock: '1', firstPrice : '30352', finalPrice: '22764', image : '/static/img/products/164902.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164903', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JN', art: '011', stock: '1', firstPrice : '46953', finalPrice: '35214.75', image : '/static/img/products/164903.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '160098', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JN', art: '402', stock: '1', firstPrice : '71295', finalPrice: '53471.25', image : '/static/img/products/160098.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '160099', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JN', art: '450', stock: '1', firstPrice : '75879', finalPrice: '56909.25', image : '/static/img/products/160099.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163208', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JX', art: '291 ноги 78', stock: '1', firstPrice : '29435', finalPrice: '22076.25', image : '/static/img/products/163208.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164560', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JX', art: '000 ноги 78', stock: '1', firstPrice : '40231', finalPrice: '30173.25', image : '/static/img/products/164560.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164561', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JX', art: '002 ноги 78', stock: '1', firstPrice : '40231', finalPrice: '30173.25', image : '/static/img/products/164561.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '88126', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JX', art: '011 ноги 78', stock: '1', firstPrice : '45629', finalPrice: '34221.75', image : '/static/img/products/88126.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163221', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C021 20JX', art: '338', stock: '1', firstPrice : '58259', finalPrice: '43694.25', image : '/static/img/products/163221.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162767', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C027 83010217', art: '291', stock: '1', firstPrice : '19759', finalPrice: '14819.25', image : '/static/img/products/162767.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162768', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C027 83010217', art: '047', stock: '1', firstPrice : '31268', finalPrice: '23451', image : '/static/img/products/162768.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162772', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C027 83010217', art: '452', stock: '1', firstPrice : '54083', finalPrice: '40562.25', image : '/static/img/products/162772.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '162773', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C048 15WM welt 15CW', art: '323', stock: '1', firstPrice : '20167', finalPrice: '15125.25', image : '/static/img/products/162773.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163857', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C048 15WM welt 15CW', art: '514', stock: '1', firstPrice : '64573', finalPrice: '48429.75', image : '/static/img/products/163857.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163201', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C048 15WM welt 15CW', art: '515', stock: '1', firstPrice : '64573', finalPrice: '48429.75', image : '/static/img/products/163201.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163202', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C056 15WM welt 15CW', art: '066 ноги 75', stock: '1', firstPrice : '47870', finalPrice: '35902.5', image : '/static/img/products/163202.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102708', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 10BK-CS', art: '291', stock: '1', firstPrice : '27398', finalPrice: '20548.5', image : '/static/img/products/102708.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102709', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 10BK-CS', art: '514', stock: '1', firstPrice : '58259', finalPrice: '43694.25', image : '/static/img/products/102709.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113240', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 10BK-CS', art: '515', stock: '1', firstPrice : '58259', finalPrice: '43694.25', image : '/static/img/products/113240.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113241', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 10BK-CS', art: '189', stock: '1', firstPrice : '70379', finalPrice: '52784.25', image : '/static/img/products/113241.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164589', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 10BK-CS', art: '188', stock: '1', firstPrice : '70379', finalPrice: '52784.25', image : '/static/img/products/164589.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164608', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 1562-CS', art: '291', stock: '1', firstPrice : '29028', finalPrice: '21771', image : '/static/img/products/164608.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164609', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 1562-CS', art: '514', stock: '1', firstPrice : '60805', finalPrice: '45603.75', image : '/static/img/products/164609.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164621', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 1562-CS', art: '515', stock: '1', firstPrice : '60805', finalPrice: '45603.75', image : '/static/img/products/164621.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164623', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 1562-CS', art: '188', stock: '1', firstPrice : '73638', finalPrice: '55228.5', image : '/static/img/products/164623.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163227', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C072 1562-CS', art: '189', stock: '1', firstPrice : '73638', finalPrice: '55228.5', image : '/static/img/products/163227.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130891', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C077 68003702', art: '262', stock: '1', firstPrice : '56935', finalPrice: '42701.25', image : '/static/img/products/130891.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163214', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C077 68003702', art: '530', stock: '1', firstPrice : '69564', finalPrice: '52173', image : '/static/img/products/163214.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163233', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C077 78017610', art: '262', stock: '1', firstPrice : '61009', finalPrice: '45756.75', image : '/static/img/products/163233.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '95419', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'C077 78017610', art: '530', stock: '1', firstPrice : '74860', finalPrice: '56145', image : '/static/img/products/95419.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164606', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'KIT LETTO', art: 'A793TE0 KIT DOUBLE BED BEIGE 140X190', stock: '1', firstPrice : '14871', finalPrice: '11153.25', image : '/static/img/products/164606.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164607', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A785T00 PILLOW  IVORY 50X50', stock: '1', firstPrice : '2700', finalPrice: '2025', image : '/static/img/products/164607.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113213', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A787T70 PILLOW BROWN 50X50', stock: '1', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/113213.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164592', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A787T00 PILLOW  IVORY 50X50', stock: '1', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/164592.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130899', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A788T70 PILLOW  BROWN 50X50', stock: '1', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/130899.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '113238', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A788TE0 PILLOW  BEIGE 50X50', stock: '1', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/113238.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163223', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A783T60 PILLOW GREY 50X50', stock: '2', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/163223.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136772', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A783TD0 PILLOW BORDEAUX 50X50', stock: '1', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/136772.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136773', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'PILLOW', art: 'A782TE0 PILLOW  BEIGE 50X50', stock: '1', firstPrice : '3209', finalPrice: '2406.75', image : '/static/img/products/136773.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163180', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.A800 70.0077.09', art: '376', stock: '1', firstPrice : '1834', finalPrice: '1375.5', image : '/static/img/products/163180.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163206', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.A800 78.0176.02', art: '385', stock: '2', firstPrice : '1834', finalPrice: '1375.5', image : '/static/img/products/163206.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '95416', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B536 70004603', art: '003 ноги 18', stock: '1', firstPrice : '26573', finalPrice: '19929.75', image : '/static/img/products/95416.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163213', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B536 70004603', art: '261 ноги 18', stock: '1', firstPrice : '52820', finalPrice: '39615', image : '/static/img/products/163213.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164944', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B741 70006301', art: '003 ноги 18', stock: '2', firstPrice : '17621', finalPrice: '13215.75', image : '/static/img/products/164944.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '110761', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B741 70006301', art: '034 ноги 18', stock: '1', firstPrice : '26583', finalPrice: '19937.25', image : '/static/img/products/110761.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164624', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B741 70006301', art: '037 ноги 18', stock: '2', firstPrice : '50009', finalPrice: '37506.75', image : '/static/img/products/164624.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '121911', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B741 83009001', art: '034 ноги 18', stock: '1', firstPrice : '26991', finalPrice: '20243.25', image : '/static/img/products/121911.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163875', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B757 68003005', art: '003', stock: '1', firstPrice : '32898', finalPrice: '24673.5', image : '/static/img/products/163875.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136362', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B757 68003009', art: '003', stock: '2', firstPrice : '32898', finalPrice: '24673.5', image : '/static/img/products/136362.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136582', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B757 68003009', art: '264', stock: '1', firstPrice : '87693', finalPrice: '65769.75', image : '/static/img/products/136582.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136775', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 70006304', art: '000', stock: '1', firstPrice : '24149', finalPrice: '18111.75', image : '/static/img/products/136775.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '157913', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 70006304', art: '002', stock: '1', firstPrice : '24149', finalPrice: '18111.75', image : '/static/img/products/157913.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159868', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 70006304', art: '029', stock: '1', firstPrice : '29527', finalPrice: '22145.25', image : '/static/img/products/159868.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159877', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 70006304', art: '024', stock: '1', firstPrice : '77172', finalPrice: '57879', image : '/static/img/products/159877.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163077', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 70006304', art: '025', stock: '1', firstPrice : '77172', finalPrice: '57879', image : '/static/img/products/163077.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163950', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 70006304', art: '015', stock: '1', firstPrice : '84342', finalPrice: '63256.5', image : '/static/img/products/163950.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130887', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 Nuvola 68003001', art: '000', stock: '3', firstPrice : '19148', finalPrice: '14361', image : '/static/img/products/130887.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '158548', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 Nuvola 68003001', art: '002', stock: '4', firstPrice : '19148', finalPrice: '14361', image : '/static/img/products/158548.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '95395', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 Nuvola 68003001', art: '029', stock: '6', firstPrice : '22917', finalPrice: '17187.75', image : '/static/img/products/95395.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '157901', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 Nuvola 68003001', art: '024', stock: '3', firstPrice : '62638', finalPrice: '46978.5', image : '/static/img/products/157901.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '159881', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 Nuvola 68003001', art: '025', stock: '3', firstPrice : '62638', finalPrice: '46978.5', image : '/static/img/products/159881.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '121907', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B835 Nuvola 78016108', art: '029', stock: '1', firstPrice : '25769', finalPrice: '19326.75', image : '/static/img/products/121907.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102717', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B883 83010211', art: '548', stock: '1', firstPrice : '70684', finalPrice: '53013', image : '/static/img/products/102717.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163080', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B883 83010211', art: '530', stock: '1', firstPrice : '81175', finalPrice: '60881.25', image : '/static/img/products/163080.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163216', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B883 83010217', art: '548', stock: '1', firstPrice : '70684', finalPrice: '53013', image : '/static/img/products/163216.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '130883', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B883 85.00.50.03', art: '529', stock: '1', firstPrice : '77610', finalPrice: '58207.5', image : '/static/img/products/130883.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '133794', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B895 78016108', art: '010', stock: '1', firstPrice : '14565', finalPrice: '10923.75', image : '/static/img/products/133794.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163073', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B895 78016108', art: '100', stock: '1', firstPrice : '17213', finalPrice: '12909.75', image : '/static/img/products/163073.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163070', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B895 78016108', art: '001', stock: '2', firstPrice : '23528', finalPrice: '17646', image : '/static/img/products/163070.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136361', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B895 78016108', art: '016', stock: '1', firstPrice : '57138', finalPrice: '42853.5', image : '/static/img/products/136361.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '136581', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B895 78016108', art: '017', stock: '1', firstPrice : '57138', finalPrice: '42853.5', image : '/static/img/products/136581.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134396', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B985 78017603', art: '009', stock: '1', firstPrice : '32083', finalPrice: '24062.25', image : '/static/img/products/134396.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163189', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B985 78017603', art: '064', stock: '1', firstPrice : '36768', finalPrice: '27576', image : '/static/img/products/163189.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '164719', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B995 78217610/78217604', art: '275', stock: '1', firstPrice : '16296', finalPrice: '12222', image : '/static/img/products/164719.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '102702', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B995 78217610/78217604', art: '452', stock: '1', firstPrice : '40639', finalPrice: '30479.25', image : '/static/img/products/102702.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '121910', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.B995 78217610/78217604', art: '534', stock: '1', firstPrice : '83008', finalPrice: '62256', image : '/static/img/products/121910.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163178', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C014 78017602', art: '233', stock: '2', firstPrice : '27704', finalPrice: '20778', image : '/static/img/products/163178.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134404', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C015 78.0176.01', art: '274', stock: '1', firstPrice : '21185', finalPrice: '15888.75', image : '/static/img/products/134404.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163199', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C015 78.0176.02', art: '113', stock: '1', firstPrice : '4889', finalPrice: '3666.75', image : '/static/img/products/163199.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163185', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C015 78.0176.02', art: '253', stock: '1', firstPrice : '16704', finalPrice: '12528', image : '/static/img/products/163185.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163184', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C015 78.0176.02', art: '398', stock: '1', firstPrice : '22509', finalPrice: '16881.75', image : '/static/img/products/163184.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '107511', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C015 78.0176.03', art: '291', stock: '1', firstPrice : '16195', finalPrice: '12146.25', image : '/static/img/products/107511.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '134401', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C015 78.0176.03', art: '272', stock: '1', firstPrice : '21185', finalPrice: '15888.75', image : '/static/img/products/134401.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '158428', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C016 78.0176.02', art: '127', stock: '1', firstPrice : '2954', finalPrice: '2215.5', image : '/static/img/products/158428.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},
{id: '163884', showItem: '1', factory: 'Natuzzi Editions', model: '', cover: '', description: 'т.C017 70.0077.11', art: '064', stock: '1', firstPrice : '66203', finalPrice: '49652.25', image : '/static/img/products/163884.jpg', sizeW : '', sizeD : '', sizeH: '', country: 'Италия', tags: ''},






        /////////////////
      ],
      searchName: "",
      carName: "",
      carYear: 2018,
      cars: []
    };
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };

      this.$http
        .post("http://localhost:3000/cars", car)
        .then(response => {
          return response.json();
        })
        .then(newCar => {
          console.log(newCar);
        });
    },
    loadCars() {
      this.$http
        .get("http://localhost:3000/cars")
        .then(response => {
          return response.json();
        })
        .then(cars => {
          this.cars = cars;
          console.log(cars);
        });
    }
  },

  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return (
          name.id.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.factory.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.model.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.cover.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.description
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.art.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.stock.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.firstPrice
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.finalPrice
            .toLowerCase()
            .indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.sizeW.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.sizeD.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.sizeH.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.country.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.tags.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.id.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1 ||
          name.factory.toLowerCase().indexOf(this.searchName.toLowerCase()) !==
            -1 ||
          name.tags.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  padding: 2%;
  flex-grow: 1;
  flex-basis: 30%;
  /* position: relative; */
  /* padding-bottom: 170px; */
  font-size: 17px;
}

.product-image img {
  max-width: 100%;
}

.product-info {
  /* position: absolute; */
  bottom: 0px;
}

/* Выбираем первые два товара */
.products .product-card:last-child,
.products .product-card:nth-last-child(2) {
  flex: 2 46%;
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
</style>

