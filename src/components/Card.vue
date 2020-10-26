<template>
  <div class="card-container">
    <div class="card">
      <div
        class="card--front"
        :style="`background-color:` + getColor(pokemon.types)"
      >
        <div class="img-container">
          <img
            :src="
              `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
            "
            :alt="pokemon.name"
          />
        </div>
        <div class="info">
          <span class="number">#{{ pokemon.id }}</span>
          <h3 class="name">{{ pokemon.name }}</h3>
          <small class="type"
            >Type:
            <div
              class="item"
              v-for="(type, i) in pokemon.types"
              :key="type.name"
            >
              <span v-if="i >= 1"> | </span>{{ type.type.name }}
            </div>
          </small>
        </div>
      </div>
      <div class="card--back">
        <p class="pokedex">{{ getGeneration(pokemon.id)[0].name }} Pokedex</p>
        <div class="stats" v-for="item in pokemon.stats" :key="item.stat.name">
          <div class="info">
            {{
              item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)
            }}
            {{ item.base_stat }}
          </div>
          <div class="bar" :style="getStyle(pokemon, item.base_stat)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getGeneration from '@/helpers/pokedex';
import getColor from '@/helpers/colors';

export default {
  props: {
    pokemon: { type: Object },
  },
  setup() {
    const getStyle = (pokemon, value) => {
      return `background: linear-gradient(to right, ${getColor(
        pokemon.types
      )} ${value}%, #c2f3ff71 ${value}%);`;
    };

    return {
      getColor,
      getStyle,
      getGeneration,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  &:hover .card {
    transform: rotateY(0.5turn);
    cursor: pointer;
  }

  & .card {
    position: relative;
    margin: 10px;
    padding: 20px;
    height: 250px;
    width: 150px;
    text-align: center;
    border-radius: 20px;
    transition: transform 1.5s;
    transform-style: preserve-3d;
    cursor: pointer;

    & .card--back,
    .card--front {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      border: 4px solid #fff;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }

    & .card--front {
      z-index: -2;

      & .img-container {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        width: 120px;
        height: 120px;
        text-align: center;

        & img {
          margin-top: 20px;
          max-width: 90%;
        }
      }

      & .info {
        margin-top: 20px;

        & .pokedex {
          font-size: 12px;
          color: #fff;
          font-weight: 600;
        }

        & .type {
          display: flex;

          & .item {
            margin: 0 2px;
          }
        }

        & .number {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          font-size: 0.8em;
          padding: 5px 10px;
        }

        & .name {
          margin: 15px 0 7px;
          letter-spacing: 1px;
        }
      }
    }

    & .card--back {
      transform: rotateY(0.5turn);
      background-color: #464646;
      color: white;
      border: 4px solid #464646;

      & .stats {
        & .info {
          font-weight: bold;
          font-size: 0.8rem;
        }

        & .bar {
          width: 100px;
          height: 8px;
          margin: 8px 0;
        }
      }
    }
  }
}
</style>
