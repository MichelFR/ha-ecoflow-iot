# EcoFlow Delta Pro Ultra

**Category:** Power Stations · **Auto-detected by SN prefix:** `Y711Z`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_pro_ultra.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: 🔧 = diagnostic entity · 💤 = disabled by default · 🌐 = HTTP-only (refreshed on a slower HTTP cadence, not via MQTT).

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `hs_yj751_pd_appshow_addr.soc` |  |
| Remaining time | duration | min | `hs_yj751_pd_appshow_addr.remainTime` | 🔧 |
| Battery pack count | — | — | `hs_yj751_pd_appshow_addr.bpNum` | 🔧 💤 |
| Total input power | power | W | `hs_yj751_pd_appshow_addr.wattsInSum` |  |
| Total output power | power | W | `hs_yj751_pd_appshow_addr.wattsOutSum` |  |
| LV MPPT input power | power | W | `hs_yj751_pd_appshow_addr.inLvMpptPwr` |  |
| HV MPPT input power | power | W | `hs_yj751_pd_appshow_addr.inHvMpptPwr` |  |
| AC C20 input power | power | W | `hs_yj751_pd_appshow_addr.inAcC20Pwr` |  |
| POWER IN/OUT input power | power | W | `hs_yj751_pd_appshow_addr.inAc5p8Pwr` |  |
| AC port 1 output power | power | W | `hs_yj751_pd_appshow_addr.outAcL11Pwr` |  |
| AC port 2 output power | power | W | `hs_yj751_pd_appshow_addr.outAcL12Pwr` |  |
| AC port 3 output power | power | W | `hs_yj751_pd_appshow_addr.outAcL21Pwr` |  |
| AC port 4 output power | power | W | `hs_yj751_pd_appshow_addr.outAcL22Pwr` |  |
| AC 30A output power | power | W | `hs_yj751_pd_appshow_addr.outAcTtPwr` |  |
| AC L14 output power | power | W | `hs_yj751_pd_appshow_addr.outAcL14Pwr` |  |
| POWER IN/OUT output power | power | W | `hs_yj751_pd_appshow_addr.outAc5p8Pwr` |  |
| Parallel box discharge power | power | W | `hs_yj751_pd_appshow_addr.outPrPwr` | 💤 |
| DC Anderson output power | power | W | `hs_yj751_pd_appshow_addr.outAdsPwr` |  |
| Type-C 1 output power | power | W | `hs_yj751_pd_appshow_addr.outTypec1Pwr` |  |
| Type-C 2 output power | power | W | `hs_yj751_pd_appshow_addr.outTypec2Pwr` |  |
| USB 1 output power | power | W | `hs_yj751_pd_appshow_addr.outUsb1Pwr` |  |
| USB 2 output power | power | W | `hs_yj751_pd_appshow_addr.outUsb2Pwr` |  |
| Charge limit | battery | % | `hs_yj751_pd_app_set_info_addr.chgMaxSoc` | 🔧 💤 |
| Discharge limit | battery | % | `hs_yj751_pd_app_set_info_addr.dsgMinSoc` | 🔧 💤 |
| Backup reserve SOC | battery | % | `hs_yj751_pd_app_set_info_addr.sysBackupSoc` | 🔧 💤 |
| Backup reserve level | — | % | `hs_yj751_pd_app_set_info_addr.backupRatio` | 🔧 💤 |
| Device standby time | duration | min | `hs_yj751_pd_app_set_info_addr.powerStandbyMins` | 🔧 💤 |
| AC standby time | duration | min | `hs_yj751_pd_app_set_info_addr.acStandbyMins` | 🔧 💤 |
| DC standby time | duration | min | `hs_yj751_pd_app_set_info_addr.dcStandbyMins` | 🔧 💤 |
| Screen standby time | duration | s | `hs_yj751_pd_app_set_info_addr.screenStandbySec` | 🔧 💤 |
| AC C20 charge power setpoint | power | W | `hs_yj751_pd_app_set_info_addr.chgC20SetWatts` | 🔧 💤 |
| POWER IN/OUT charge power setpoint | power | W | `hs_yj751_pd_app_set_info_addr.chg5p8SetWatts` | 🔧 💤 |
| AC C20 max charge power | power | W | `hs_yj751_pd_appshow_addr.c20ChgMaxWatts` | 🔧 💤 |
| POWER IN/OUT max charge power | power | W | `hs_yj751_pd_appshow_addr.paraChgMaxWatts` | 🔧 💤 |
| AC output frequency | frequency | Hz | `hs_yj751_pd_app_set_info_addr.acOutFreq` | 🔧 |
| Device error code | — | — | `hs_yj751_pd_appshow_addr.sysErrCode` | 🔧 💤 |
| LV MPPT input voltage | voltage | V | `hs_yj751_pd_backend_addr.inLvMpptVol` | 🔧 💤 |
| LV MPPT input current | current | A | `hs_yj751_pd_backend_addr.inLvMpptAmp` | 🔧 💤 |
| HV MPPT input voltage | voltage | V | `hs_yj751_pd_backend_addr.inHvMpptVol` | 🔧 💤 |
| HV MPPT input current | current | A | `hs_yj751_pd_backend_addr.inHvMpptAmp` | 🔧 💤 |
| AC input voltage | voltage | V | `hs_yj751_pd_backend_addr.inAc5p8Vol` | 🔧 💤 |
| AC input current | current | A | `hs_yj751_pd_backend_addr.inAc5p8Amp` | 🔧 💤 |
| AC C20 input voltage | voltage | V | `hs_yj751_pd_backend_addr.inAcC20Vol` | 🔧 💤 |
| AC C20 input current | current | A | `hs_yj751_pd_backend_addr.inAcC20Amp` | 🔧 💤 |
| AC L2-1 output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcL21Vol` | 🔧 💤 |
| AC L2-1 output current | current | A | `hs_yj751_pd_backend_addr.outAcL21Amp` | 🔧 💤 |
| AC L2-2 output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcL22Vol` | 🔧 💤 |
| AC L2-2 output current | current | A | `hs_yj751_pd_backend_addr.outAcL22Amp` | 🔧 💤 |
| AC TT output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcTtVol` | 🔧 💤 |
| AC TT output current | current | A | `hs_yj751_pd_backend_addr.outAcTtAmp` | 🔧 💤 |
| AC L14 output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcL14Vol` | 🔧 💤 |
| AC L14 output current | current | A | `hs_yj751_pd_backend_addr.outAcL14Amp` | 🔧 💤 |
| AC POWER IN/OUT output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAc5p8Vol` | 🔧 💤 |
| AC POWER IN/OUT output current | current | A | `hs_yj751_pd_backend_addr.outAc5p8Amp` | 🔧 💤 |
| AC L1-2 output current | current | A | `hs_yj751_pd_backend_addr.outAcL12Amp` | 🔧 💤 |
| AC L1-1 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL11Pf` | 🔧 💤 |
| AC L1-2 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL12Pf` | 🔧 💤 |
| AC L2-1 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL21Pf` | 🔧 💤 |
| AC L2-2 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL22Pf` | 🔧 💤 |
| AC TT output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcTtPf` | 🔧 💤 |
| AC L14 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL14Pf` | 🔧 💤 |
| AC POWER IN/OUT output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcP58Pf` | 🔧 💤 |
| Solar energy | energy | Wh | _integrated_ |  |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| 4G enabled | connectivity | `hs_yj751_pd_appshow_addr.wireless4gOn` | 🔧 |
| 4G connected | connectivity | `hs_yj751_pd_appshow_addr.wireless4gCon` | 🔧 💤 |
| AC Always-On | — | `hs_yj751_pd_app_set_info_addr.acOftenOpenFlg` | 🔧 |
| Battery auto-heating | heat | `hs_yj751_pd_app_set_info_addr.bmsModeSet` | 🔧 |

## Switches

| Entity | Quota key | Flags |
|---|---|---|
| DC output | `hs_yj751_pd_appshow_addr.showFlag` |  |
| Battery heating | `hs_yj751_pd_appshow_addr.showFlag` |  |
| AC output | `hs_yj751_pd_appshow_addr.showFlag` |  |
| X-Boost | `hs_yj751_pd_app_set_info_addr.acXboost` |  |
| AC Always-On switch | `hs_yj751_pd_app_set_info_addr.acOftenOpenFlg` |  |
| 4G switch | `hs_yj751_pd_appshow_addr.wireless4gOn` |  |

## Numbers

| Entity | Unit | Range | Quota key | Flags |
|---|---|---|---|---|
| Charge limit | % | 50–100 (step 1) | `hs_yj751_pd_app_set_info_addr.chgMaxSoc` |  |
| Discharge limit | % | 0–30 (step 1) | `hs_yj751_pd_app_set_info_addr.dsgMinSoc` |  |
| Device standby time | min | 0–720 (step 1) | `hs_yj751_pd_app_set_info_addr.powerStandbyMins` |  |
| AC standby time | min | 0–720 (step 1) | `hs_yj751_pd_app_set_info_addr.acStandbyMins` |  |
| DC standby time | min | 0–720 (step 1) | `hs_yj751_pd_app_set_info_addr.dcStandbyMins` |  |
| Screen standby time | s | 0–600 (step 1) | `hs_yj751_pd_app_set_info_addr.screenStandbySec` |  |
| AC C20 charge power | W | 200–3000 (step 100) | `hs_yj751_pd_app_set_info_addr.chgC20SetWatts` |  |
| POWER IN/OUT charge power | W | 200–6000 (step 100) | `hs_yj751_pd_app_set_info_addr.chg5p8SetWatts` |  |

## Selects

| Entity | Options | Quota key | Flags |
|---|---|---|---|
| work_mode | default, self_powered, scheduled, tou | _derived_ | 🌐 |

---

_Entity totals: 82 — 63 sensor, 4 binary_sensor, 6 switch, 8 number, 1 select._
