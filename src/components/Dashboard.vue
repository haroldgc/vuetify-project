<template>
    <div class="dashboard">
        <v-container class="pa-3">
            <v-row>
                <v-col class="pa-1" cols="12" md="12">
                    <v-card flat>
                        <v-card-title>
                            <h2>Card Title</h2>
                        </v-card-title>
                        <v-card-text>
                            <div>Text here</div>
                            <div>
                                <v-table class="listItems" fixed-header>
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Name
                                            </th>
                                            <th class="text-left">
                                                Calories
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in desserts" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.calories }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const desserts = ref([
    {
        name: 'Frozen Yogurt',
        calories: 159,
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
    },
    {
        name: 'Eclair',
        calories: 262,
    },
    {
        name: 'Cupcake',
        calories: 305,
    },
    {
        name: 'Gingerbread',
        calories: 356,
    },
    {
        name: 'Jelly bean',
        calories: 375,
    },
    {
        name: 'Lollipop',
        calories: 392,
    },
    {
        name: 'Honeycomb',
        calories: 408,
    },
    {
        name: 'Donut',
        calories: 452,
    },
    {
        name: 'KitKat',
        calories: 518,
    },
])

console.log(desserts)

</script>