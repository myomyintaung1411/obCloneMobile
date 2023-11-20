<template>
  <section
    class="bg_img animate-fadefromTop w-screen h-screen relative overflow-y-auto sm:max-w-lg"
  >
    <div class="w-full px-7 relative">
      <section
        v-if="activeSection === 1"
        class="w-full overflow-hidden rounded flex items-stretch animate-fadeleft"
      >
        <div class="flex-1 bg-[hsla(0,0%,85%,.4)] py-2 px-3">
          <div class="text-center text-white pb-5 pt-2 tracking-wide w-full">
            登录
          </div>
          <form @click.prevent>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR42tWWLYvkQBCGDyIHGgKxY/MDxmVU3Mg1y5q4k/kD53a4XzA2dtyIhYVRMUPEyLFjAmPORcTFxTwXikCTrnzs3cEtWzGppvvt+uq36tvXFnwSjhSUNDSUFBxJ8P8O7IkLLWPScuHpz8Airv3RnJSYEIMhJCYl76+5En0MzOMAQEWKGd1hSKkAOOAtwRlysWzPanbfir1YmmPm4e5A9TFn2Iqdd8y0s7lsWGt7CAm1zazFgHzCcYld5cIRI2noUxQryAo4jGZWjmwdmzMAGgoKGgAyPMfxFtBB4grsh2sCV5Pg9fAJNZA5u/bAVZcxVMMosRO49dBFgdw5Ea7AKXUuQKpt5ll58qztIQUuwzfbdp9x3jHUY8kTe/xhucl5u0YC5M6xDbKmhRzY6DUSqx7FYQ14HgU8C6B2+mjVAlSFBUA16XKgqhUKq5ZAqA7ebD6d3N/UagiUVm0A/bBegF9O+P1uBV40CwDNHKAIbwIZW8cE7k2UEUDtsiaFdwAenLrvAcC7ulq5rJKi+MRKaV+OTooqG2VfRgu0lJy779FrBySuumzmC9uXLNf8wNgrOq0G7gSzha2fHkFPnTr3RuJ6w9dPb4YcyIAT3jizC+RZkcM0fbGRchFtHFIyvlP0NUWwnCQiM8J3IJ8hWKFyaIl6zvu52L1L7vIXSe63C01qWfAJbJNabKPLotvovzf6yDb65VHkdXEUebWjyH8YllTG1Ti3YqXGue2nDZzLI/GXlt8z5Efk//aSCgAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="text"
                placeholder="用户名"
                maxlength="20"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR42tXWP2vbYBAG8ELopsEfIFm9ZhWeDNmyZA5oLBQ0Z/bcyZ8gk75CF02avJYsmfwJNBa8afn1xRTUtxdbqRIouUMgPbr3QfdHd/fpY4uFSqOzd0i612lUFvPI7nQGoiS0c/dvZKXd76Ot2tpSkXRprdYmFHbK15Fd2IJerTgRiFoPti6mo9ZisFGctStsDGgtztM9o3+dM1Z6PFucdrY9GlwFfOVr0tXfDrryjPaIR7FFH+jK46GjpLsyUPbYvuwAQzhwn7C9yjJpZW9wH84NWEXCHTY55tJPnWJMhS4hl7mVDXaxjOkVOerRwVXuYkIeQ8Z73OVghzp8da8NWKsPWI0uL5chaai8hH0L2IOngBXH84sRqNDGRI1RnRItqvGxQf0mwhpNHsF1ZvBZ6RaN2xe19DmzX2dRtMcyi8mTKXn6M+aW2I+PB7LXX0hXeUaPFtkncDhNuMHFRJNjEwiDyzMIg8tjUmYQhqSEsplBGMomFPYswhZV+PVmEIZfLzSHGYRjc4jtawZhbF+xwXrAYmI68hAa7KkR4Nqg9+OM9gbX4whQTgwpNxrfz2jjJgypiTE6IXGMvn3Ql2HQv+8qMn9ZKsKy9E7r3Oq/LZzTK/GHll8m3loGX3l4/QAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="password"
                placeholder="密码"
                maxlength="20"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 relative w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR42tXWP2vbYBAG8ELopsEfIFm9ZhWeDNmyZA5oLBQ0Z/bcyZ8gk75CF02avJYsmfwJNBa8afn1xRTUtxdbqRIouUMgPbr3QfdHd/fpY4uFSqOzd0i612lUFvPI7nQGoiS0c/dvZKXd76Ot2tpSkXRprdYmFHbK15Fd2IJerTgRiFoPti6mo9ZisFGctStsDGgtztM9o3+dM1Z6PFucdrY9GlwFfOVr0tXfDrryjPaIR7FFH+jK46GjpLsyUPbYvuwAQzhwn7C9yjJpZW9wH84NWEXCHTY55tJPnWJMhS4hl7mVDXaxjOkVOerRwVXuYkIeQ8Z73OVghzp8da8NWKsPWI0uL5chaai8hH0L2IOngBXH84sRqNDGRI1RnRItqvGxQf0mwhpNHsF1ZvBZ6RaN2xe19DmzX2dRtMcyi8mTKXn6M+aW2I+PB7LXX0hXeUaPFtkncDhNuMHFRJNjEwiDyzMIg8tjUmYQhqSEsplBGMomFPYswhZV+PVmEIZfLzSHGYRjc4jtawZhbF+xwXrAYmI68hAa7KkR4Nqg9+OM9gbX4whQTgwpNxrfz2jjJgypiTE6IXGMvn3Ql2HQv+8qMn9ZKsKy9E7r3Oq/LZzTK/GHll8m3loGX3l4/QAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="text"
                placeholder="验证码 "
                maxlength="4"
                autocomplete="off"
                class="h-full w-full px-4 text-white rouned-dfull bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
              <div class="absolute right-0   cursor-pointer select-none">
                <canvas
                  ref="verify" class=" rounded-tr-full rounded-br-full"
                  width="100"
                  height="35"
                  @click="handleDraw"
                ></canvas>
              </div>
            </div>
            <div class="flex items-center w-full my-4 h-10 rounded-full">
              <van-button
                round
                color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)"
                style="width: 100%"
              >
                登录
              </van-button>
            </div>
            <div
              class="my-4 flex px-4 items-center justify-between text-white text-xs"
            >
              <span @click="gohome">先去逛逛</span>
              <span>在线客服</span>
            </div>
          </form>
        </div>
        <div
          @click="changeRoute(2)"
          class="relative bg-black bg-opacity-40 w-[20%]"
        >
          <div class="w-full flex flex-col justify-center items-center h-full">
            <img
              class="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR42uXXIWgrSxTG8S3E1V1dEVVRqKm7pipwRUxVVdR1haoLUVFxtVfFBEJMfMWaQE2gEFEZEVNTVbMisBCx4vegd3mPJjPzNo158P4x2dnDfjvfmXN2Jvs/4MSVgYm5lY3S2pOJoe9OsmPxw9i7GO/Gul+WcW0JQP3mUxNzayUAXnSyQ3EuB7A0cBmI6HtWAXLnWXN0bUBlqp2MPDNSgY1u1gx9FchdNpztI6j8ahI+ApV+4F5L25lW4M6dCoz+9e3D03WiZ6ECrP3e9VxHAfpp7ytsXO45/WyHfUNcKFDpxr3chAJcKYTp7S3sLd60wgJ5aIraCjHene5ZXLiKlRXke+MzoOEcTqL1YIkqUFAbKUbNew5M98a/SZM3FRiDdqCTVlI8Zjs4NdLff8w7lkHpVynGe/E9cLa7EGEQFJiKEC4r9+Di8+AAwp3HnRQ3zQQmKCNfs1yKYTOBOdYRgUqKxd+p/aH78RuB+z9XtStWeIrWR4qHOupZhH+KaRoR6ElR580iLVBiEhFoeUsbVFvU+WTR3Z+rOhfWmGcRPKQ6UbMkP2EVFfguTOW0qcAERVSgZRszqKnAsB6M4FGI+8SiOAuZ0E9swSq7vNUGhZrdr3Cze86i+OkzW+fZIZig0k7koQQAL9lh6IJpIqIAAKvDt+gvqGKJ9s0WAGycRjeT1+EbHZBH5Md2eYiuuDImMQf93V2Cn5ZCzPV2s+aWaON0oUSl8/G/L7dWIk1pLdd3/vFlLJMrzA0ozH2F3FtdgHEMHMvvBhVxBLPUie34WQwbHgjdKB3K1m3WHJeeHMLC1VfOyC+asNL9+hn/xlQhRmHmNu57c5lrQzMLr7a2Xi3MPOiETzJHy2X/Lf4CyRcQ3Z3pfQ4AAAAASUVORK5CYII="
              alt=""
            />
            <div class="writing-mode-vertical tracking-[3px] pt-3">
              注册新用户
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="activeSection === 2"
        class="w-full overflow-hidden rounded flex items-stretch animate-fade"
      >
        <div
          @click="changeRoute(1)"
          class="relative bg-black bg-opacity-40 w-[20%]"
        >
          <div class="w-full flex flex-col justify-center items-center h-full">
            <img
              class="w-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVR42uXXIWgrSxTG8S3E1V1dEVVRqKm7pipwRUxVVdR1haoLUVFxtVfFBEJMfMWaQE2gEFEZEVNTVbMisBCx4vegd3mPJjPzNo158P4x2dnDfjvfmXN2Jvs/4MSVgYm5lY3S2pOJoe9OsmPxw9i7GO/Gul+WcW0JQP3mUxNzayUAXnSyQ3EuB7A0cBmI6HtWAXLnWXN0bUBlqp2MPDNSgY1u1gx9FchdNpztI6j8ahI+ApV+4F5L25lW4M6dCoz+9e3D03WiZ6ECrP3e9VxHAfpp7ytsXO45/WyHfUNcKFDpxr3chAJcKYTp7S3sLd60wgJ5aIraCjHene5ZXLiKlRXke+MzoOEcTqL1YIkqUFAbKUbNew5M98a/SZM3FRiDdqCTVlI8Zjs4NdLff8w7lkHpVynGe/E9cLa7EGEQFJiKEC4r9+Di8+AAwp3HnRQ3zQQmKCNfs1yKYTOBOdYRgUqKxd+p/aH78RuB+z9XtStWeIrWR4qHOupZhH+KaRoR6ElR580iLVBiEhFoeUsbVFvU+WTR3Z+rOhfWmGcRPKQ6UbMkP2EVFfguTOW0qcAERVSgZRszqKnAsB6M4FGI+8SiOAuZ0E9swSq7vNUGhZrdr3Cze86i+OkzW+fZIZig0k7koQQAL9lh6IJpIqIAAKvDt+gvqGKJ9s0WAGycRjeT1+EbHZBH5Md2eYiuuDImMQf93V2Cn5ZCzPV2s+aWaON0oUSl8/G/L7dWIk1pLdd3/vFlLJMrzA0ozH2F3FtdgHEMHMvvBhVxBLPUie34WQwbHgjdKB3K1m3WHJeeHMLC1VfOyC+asNL9+hn/xlQhRmHmNu57c5lrQzMLr7a2Xi3MPOiETzJHy2X/Lf4CyRcQ3Z3pfQ4AAAAASUVORK5CYII="
              alt=""
            />
            <div class="writing-mode-vertical tracking-[3px] pt-3">
              返回登录
            </div>
          </div>
        </div>
        <div class="flex-1 bg-[hsla(0,0%,85%,.4)] py-2 px-3">
          <div class="text-center text-white pb-5 pt-2 tracking-wide w-full">
            注册
          </div>
          <form @click.prevent>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR42tWWLYvkQBCGDyIHGgKxY/MDxmVU3Mg1y5q4k/kD53a4XzA2dtyIhYVRMUPEyLFjAmPORcTFxTwXikCTrnzs3cEtWzGppvvt+uq36tvXFnwSjhSUNDSUFBxJ8P8O7IkLLWPScuHpz8Airv3RnJSYEIMhJCYl76+5En0MzOMAQEWKGd1hSKkAOOAtwRlysWzPanbfir1YmmPm4e5A9TFn2Iqdd8y0s7lsWGt7CAm1zazFgHzCcYld5cIRI2noUxQryAo4jGZWjmwdmzMAGgoKGgAyPMfxFtBB4grsh2sCV5Pg9fAJNZA5u/bAVZcxVMMosRO49dBFgdw5Ea7AKXUuQKpt5ll58qztIQUuwzfbdp9x3jHUY8kTe/xhucl5u0YC5M6xDbKmhRzY6DUSqx7FYQ14HgU8C6B2+mjVAlSFBUA16XKgqhUKq5ZAqA7ebD6d3N/UagiUVm0A/bBegF9O+P1uBV40CwDNHKAIbwIZW8cE7k2UEUDtsiaFdwAenLrvAcC7ulq5rJKi+MRKaV+OTooqG2VfRgu0lJy779FrBySuumzmC9uXLNf8wNgrOq0G7gSzha2fHkFPnTr3RuJ6w9dPb4YcyIAT3jizC+RZkcM0fbGRchFtHFIyvlP0NUWwnCQiM8J3IJ8hWKFyaIl6zvu52L1L7vIXSe63C01qWfAJbJNabKPLotvovzf6yDb65VHkdXEUebWjyH8YllTG1Ti3YqXGue2nDZzLI/GXlt8z5Efk//aSCgAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="text"
                placeholder="用户名"
                maxlength="20"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR42tXWP2vbYBAG8ELopsEfIFm9ZhWeDNmyZA5oLBQ0Z/bcyZ8gk75CF02avJYsmfwJNBa8afn1xRTUtxdbqRIouUMgPbr3QfdHd/fpY4uFSqOzd0i612lUFvPI7nQGoiS0c/dvZKXd76Ot2tpSkXRprdYmFHbK15Fd2IJerTgRiFoPti6mo9ZisFGctStsDGgtztM9o3+dM1Z6PFucdrY9GlwFfOVr0tXfDrryjPaIR7FFH+jK46GjpLsyUPbYvuwAQzhwn7C9yjJpZW9wH84NWEXCHTY55tJPnWJMhS4hl7mVDXaxjOkVOerRwVXuYkIeQ8Z73OVghzp8da8NWKsPWI0uL5chaai8hH0L2IOngBXH84sRqNDGRI1RnRItqvGxQf0mwhpNHsF1ZvBZ6RaN2xe19DmzX2dRtMcyi8mTKXn6M+aW2I+PB7LXX0hXeUaPFtkncDhNuMHFRJNjEwiDyzMIg8tjUmYQhqSEsplBGMomFPYswhZV+PVmEIZfLzSHGYRjc4jtawZhbF+xwXrAYmI68hAa7KkR4Nqg9+OM9gbX4whQTgwpNxrfz2jjJgypiTE6IXGMvn3Ql2HQv+8qMn9ZKsKy9E7r3Oq/LZzTK/GHll8m3loGX3l4/QAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="password"
                placeholder="登录密码"
                maxlength="20"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR42tXWP2vbYBAG8ELopsEfIFm9ZhWeDNmyZA5oLBQ0Z/bcyZ8gk75CF02avJYsmfwJNBa8afn1xRTUtxdbqRIouUMgPbr3QfdHd/fpY4uFSqOzd0i612lUFvPI7nQGoiS0c/dvZKXd76Ot2tpSkXRprdYmFHbK15Fd2IJerTgRiFoPti6mo9ZisFGctStsDGgtztM9o3+dM1Z6PFucdrY9GlwFfOVr0tXfDrryjPaIR7FFH+jK46GjpLsyUPbYvuwAQzhwn7C9yjJpZW9wH84NWEXCHTY55tJPnWJMhS4hl7mVDXaxjOkVOerRwVXuYkIeQ8Z73OVghzp8da8NWKsPWI0uL5chaai8hH0L2IOngBXH84sRqNDGRI1RnRItqvGxQf0mwhpNHsF1ZvBZ6RaN2xe19DmzX2dRtMcyi8mTKXn6M+aW2I+PB7LXX0hXeUaPFtkncDhNuMHFRJNjEwiDyzMIg8tjUmYQhqSEsplBGMomFPYswhZV+PVmEIZfLzSHGYRjc4jtawZhbF+xwXrAYmI68hAa7KkR4Nqg9+OM9gbX4whQTgwpNxrfz2jjJgypiTE6IXGMvn3Ql2HQv+8qMn9ZKsKy9E7r3Oq/LZzTK/GHll8m3loGX3l4/QAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="password"
                placeholder="确认密码 "
                maxlength="20"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR42tWWLYvkQBCGDyIHGgKxY/MDxmVU3Mg1y5q4k/kD53a4XzA2dtyIhYVRMUPEyLFjAmPORcTFxTwXikCTrnzs3cEtWzGppvvt+uq36tvXFnwSjhSUNDSUFBxJ8P8O7IkLLWPScuHpz8Airv3RnJSYEIMhJCYl76+5En0MzOMAQEWKGd1hSKkAOOAtwRlysWzPanbfir1YmmPm4e5A9TFn2Iqdd8y0s7lsWGt7CAm1zazFgHzCcYld5cIRI2noUxQryAo4jGZWjmwdmzMAGgoKGgAyPMfxFtBB4grsh2sCV5Pg9fAJNZA5u/bAVZcxVMMosRO49dBFgdw5Ea7AKXUuQKpt5ll58qztIQUuwzfbdp9x3jHUY8kTe/xhucl5u0YC5M6xDbKmhRzY6DUSqx7FYQ14HgU8C6B2+mjVAlSFBUA16XKgqhUKq5ZAqA7ebD6d3N/UagiUVm0A/bBegF9O+P1uBV40CwDNHKAIbwIZW8cE7k2UEUDtsiaFdwAenLrvAcC7ulq5rJKi+MRKaV+OTooqG2VfRgu0lJy779FrBySuumzmC9uXLNf8wNgrOq0G7gSzha2fHkFPnTr3RuJ6w9dPb4YcyIAT3jizC+RZkcM0fbGRchFtHFIyvlP0NUWwnCQiM8J3IJ8hWKFyaIl6zvu52L1L7vIXSe63C01qWfAJbJNabKPLotvovzf6yDb65VHkdXEUebWjyH8YllTG1Ti3YqXGue2nDZzLI/GXlt8z5Efk//aSCgAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="text"
                placeholder="真实姓名 "
                maxlength="6"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR42tXWP2vbYBAG8ELopsEfIFm9ZhWeDNmyZA5oLBQ0Z/bcyZ8gk75CF02avJYsmfwJNBa8afn1xRTUtxdbqRIouUMgPbr3QfdHd/fpY4uFSqOzd0i612lUFvPI7nQGoiS0c/dvZKXd76Ot2tpSkXRprdYmFHbK15Fd2IJerTgRiFoPti6mo9ZisFGctStsDGgtztM9o3+dM1Z6PFucdrY9GlwFfOVr0tXfDrryjPaIR7FFH+jK46GjpLsyUPbYvuwAQzhwn7C9yjJpZW9wH84NWEXCHTY55tJPnWJMhS4hl7mVDXaxjOkVOerRwVXuYkIeQ8Z73OVghzp8da8NWKsPWI0uL5chaai8hH0L2IOngBXH84sRqNDGRI1RnRItqvGxQf0mwhpNHsF1ZvBZ6RaN2xe19DmzX2dRtMcyi8mTKXn6M+aW2I+PB7LXX0hXeUaPFtkncDhNuMHFRJNjEwiDyzMIg8tjUmYQhqSEsplBGMomFPYswhZV+PVmEIZfLzSHGYRjc4jtawZhbF+xwXrAYmI68hAa7KkR4Nqg9+OM9gbX4whQTgwpNxrfz2jjJgypiTE6IXGMvn3Ql2HQv+8qMn9ZKsKy9E7r3Oq/LZzTK/GHll8m3loGX3l4/QAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="password"
                placeholder="支付密码 "
                maxlength="20"
                autocomplete="off"
                class="h-full w-full px-4 text-white rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
            </div>
            <div
              class="flex items-center px-4 w-full my-4 h-10 bg-black bg-opacity-30 rounded-full"
            >
              <img
                class="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR42tXWP2vbYBAG8ELopsEfIFm9ZhWeDNmyZA5oLBQ0Z/bcyZ8gk75CF02avJYsmfwJNBa8afn1xRTUtxdbqRIouUMgPbr3QfdHd/fpY4uFSqOzd0i612lUFvPI7nQGoiS0c/dvZKXd76Ot2tpSkXRprdYmFHbK15Fd2IJerTgRiFoPti6mo9ZisFGctStsDGgtztM9o3+dM1Z6PFucdrY9GlwFfOVr0tXfDrryjPaIR7FFH+jK46GjpLsyUPbYvuwAQzhwn7C9yjJpZW9wH84NWEXCHTY55tJPnWJMhS4hl7mVDXaxjOkVOerRwVXuYkIeQ8Z73OVghzp8da8NWKsPWI0uL5chaai8hH0L2IOngBXH84sRqNDGRI1RnRItqvGxQf0mwhpNHsF1ZvBZ6RaN2xe19DmzX2dRtMcyi8mTKXn6M+aW2I+PB7LXX0hXeUaPFtkncDhNuMHFRJNjEwiDyzMIg8tjUmYQhqSEsplBGMomFPYswhZV+PVmEIZfLzSHGYRjc4jtawZhbF+xwXrAYmI68hAa7KkR4Nqg9+OM9gbX4whQTgwpNxrfz2jjJgypiTE6IXGMvn3Ql2HQv+8qMn9ZKsKy9E7r3Oq/LZzTK/GHll8m3loGX3l4/QAAAABJRU5ErkJggg=="
                alt=""
              />
              <input
                type="text"
                placeholder="支付密码 "
                maxlength="4"
                autocomplete="off"
                class="h-full w-full px-4 text-white relative rounded-full bg-transparent outline-none focus-within:outline-none focus:outline-none"
              />
                            <div class="absolute right-3   cursor-pointer select-none">
                <canvas
                  ref="verify" class=" rounded-tr-full rounded-br-full"
                  width="100"
                  height="35"
                  @click="handleDraw"
                ></canvas>
              </div>
            </div>
            <div class="flex items-center w-full my-4 h-10 rounded-full">
              <van-button
                round
                color="linear-gradient(90deg, rgb(84, 110, 216) 0%, rgba(116,144,255,1) 35%, rgba(111,129,200,1) 100%)"
                style="width: 100%"
              >
                注册
              </van-button>
            </div>
            <div
              class="my-4 flex px-4 items-center justify-between text-white text-xs"
            >
              <span @click="gohome">先去逛逛</span>
              <span>在线客服</span>
            </div>
          </form>
        </div>
      </section>
    </div>


  </section>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const verify = ref(null);
    const activeSection = ref(1);
    const state = reactive({
      pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", // 字符串
      width: 100,
      height: 35,
      imgCode: "",
    });

    onMounted(() => {
      state.imgCode = draw();
    });

    const changeRoute = (number) => {
        activeSection.value = number
        setTimeout(() => {
            state.imgCode = draw();
        }, 500);
    }

    const gohome = () => {
      router.push("/home");
    };

    // 点击图片重新绘制
    const handleDraw = () => {
      state.imgCode = draw();
    };

    // 随机数
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min) + min);
    };
    // 随机颜色
    const randomColor = (min, max) => {
      const r = randomNum(min, max);
      const g = randomNum(min, max);
      const b = randomNum(min, max);
      return `rgb(${r},${g},${b})`;
    };

    // 绘制图片
    const draw = () => {
      // 3.填充背景颜色，背景颜色要浅一点
      const ctx = verify.value?.getContext("2d");
      // 填充颜色
      ctx.fillStyle = randomColor(180, 230);
      // 填充的位置
      ctx.fillRect(0, 0, state.width, state.height);
      // 定义paramText
      let imgCode = "";
      // 4.随机产生字符串，并且随机旋转
      for (let i = 0; i < 4; i++) {
        // 随机的四个字
        const text = state.pool[randomNum(0, state.pool.length)];
        imgCode += text;
        // 随机的字体大小
        const fontSize = randomNum(18, 25);
        // 字体随机的旋转角度
        const deg = randomNum(-30, 30);
        /*
         * 绘制文字并让四个文字在不同的位置显示的思路 :
         * 1、定义字体
         * 2、定义对齐方式
         * 3、填充不同的颜色
         * 4、保存当前的状态（以防止以上的状态受影响）
         * 5、平移translate()
         * 6、旋转 rotate()
         * 7、填充文字
         * 8、restore出栈
         * */
        ctx.font = fontSize + "px Simhei";
        ctx.textBaseline = "top";
        ctx.fillStyle = randomColor(80, 150);
        /*
         * save() 方法把当前状态的一份拷贝压入到一个保存图像状态的栈中。
         * 这就允许您临时地改变图像状态，
         * 然后，通过调用 restore() 来恢复以前的值。
         * save是入栈，restore是出栈。
         * 用来保存Canvas的状态。save之后，可以调用Canvas的平移、放缩、旋转、错切、裁剪等操作。 restore：用来恢复Canvas之前保存的状态。防止save后对Canvas执行的操作对后续的绘制有影响。
         *
         * */
        ctx.save();
       // ctx.translate(30 * i + 15, 15);
       ctx.translate(state.width / 8 + i * state.width / 4, state.height / 2);

        ctx.rotate((deg * Math.PI) / 180);
        // fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。
        // 请使用 font 属性来定义字体和字号，并使用 fillStyle 属性以另一种颜色/渐变来渲染文本。
        // context.fillText(text,x,y,maxWidth);
        ctx.fillText(text, -15 + 5, -15);
        ctx.restore();
      }
      // 5.随机产生5条干扰线,干扰线的颜色要浅一点
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height));
        ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height));
        ctx.strokeStyle = randomColor(180, 230);
        ctx.closePath();
        ctx.stroke();
      }
      // 6.随机产生40个干扰的小点
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(
          randomNum(0, state.width),
          randomNum(0, state.height),
          1,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fillStyle = randomColor(150, 200);
        ctx.fill();
      }
      //state.imgCode = imgCode
      return imgCode;
    };

    return {
      ...toRefs(state),

      verify,
      handleDraw,
      activeSection,
      gohome,
      changeRoute,
    };
  },
};
</script>

<style scoped>
.bg_img {
  background-image: url(@/assets/loginBg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.writing-mode-vertical {
  writing-mode: vertical-lr; /* For vertical text orientation (left to right) */
  text-orientation: upright; /* To ensure characters are upright */
}

</style>