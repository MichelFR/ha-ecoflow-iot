# EcoFlow Delta Pro Ultra

**Category:** Power Stations · **Auto-detected by SN prefix:** `Y711Z`

> Generated from `custom_components/ecoflow_iot/devices/power_stations/delta_pro_ultra.py` by `scripts/gen_device_docs.py` — do not edit by hand.
> Every device also exposes an always-available **Connection** diagnostic sensor (MQTT state + data source).

Legend: **D** = diagnostic entity · **○** = disabled by default.

## Sensors

| Entity | Device class | Unit | Quota key | Flags |
|---|---|---|---|---|
| Battery | battery | % | `hs_yj751_pd_appshow_addr.soc` |  |
| Remaining time | duration | min | `hs_yj751_pd_appshow_addr.remainTime` | D |
| Battery pack count | — | — | `hs_yj751_pd_appshow_addr.bpNum` | D ○ |
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
| Parallel box discharge power | power | W | `hs_yj751_pd_appshow_addr.outPrPwr` | ○ |
| DC Anderson output power | power | W | `hs_yj751_pd_appshow_addr.outAdsPwr` |  |
| Type-C 1 output power | power | W | `hs_yj751_pd_appshow_addr.outTypec1Pwr` |  |
| Type-C 2 output power | power | W | `hs_yj751_pd_appshow_addr.outTypec2Pwr` |  |
| USB 1 output power | power | W | `hs_yj751_pd_appshow_addr.outUsb1Pwr` |  |
| USB 2 output power | power | W | `hs_yj751_pd_appshow_addr.outUsb2Pwr` |  |
| Charge limit | battery | % | `hs_yj751_pd_app_set_info_addr.chgMaxSoc` | D ○ |
| Discharge limit | battery | % | `hs_yj751_pd_app_set_info_addr.dsgMinSoc` | D ○ |
| Backup reserve SOC | battery | % | `hs_yj751_pd_app_set_info_addr.sysBackupSoc` | D ○ |
| Backup reserve level | — | % | `hs_yj751_pd_app_set_info_addr.backupRatio` | D ○ |
| Device standby time | duration | min | `hs_yj751_pd_app_set_info_addr.powerStandbyMins` | D ○ |
| AC standby time | duration | min | `hs_yj751_pd_app_set_info_addr.acStandbyMins` | D ○ |
| DC standby time | duration | min | `hs_yj751_pd_app_set_info_addr.dcStandbyMins` | D ○ |
| Screen standby time | duration | s | `hs_yj751_pd_app_set_info_addr.screenStandbySec` | D ○ |
| AC C20 charge power setpoint | power | W | `hs_yj751_pd_app_set_info_addr.chgC20SetWatts` | D ○ |
| POWER IN/OUT charge power setpoint | power | W | `hs_yj751_pd_app_set_info_addr.chg5p8SetWatts` | D ○ |
| AC C20 max charge power | power | W | `hs_yj751_pd_appshow_addr.c20ChgMaxWatts` | D ○ |
| POWER IN/OUT max charge power | power | W | `hs_yj751_pd_appshow_addr.paraChgMaxWatts` | D ○ |
| AC output frequency | frequency | Hz | `hs_yj751_pd_app_set_info_addr.acOutFreq` | D |
| Device error code | — | — | `hs_yj751_pd_appshow_addr.sysErrCode` | D ○ |
| LV MPPT input voltage | voltage | V | `hs_yj751_pd_backend_addr.inLvMpptVol` | D ○ |
| LV MPPT input current | current | A | `hs_yj751_pd_backend_addr.inLvMpptAmp` | D ○ |
| HV MPPT input voltage | voltage | V | `hs_yj751_pd_backend_addr.inHvMpptVol` | D ○ |
| HV MPPT input current | current | A | `hs_yj751_pd_backend_addr.inHvMpptAmp` | D ○ |
| AC input voltage | voltage | V | `hs_yj751_pd_backend_addr.inAc5p8Vol` | D ○ |
| AC input current | current | A | `hs_yj751_pd_backend_addr.inAc5p8Amp` | D ○ |
| AC C20 input voltage | voltage | V | `hs_yj751_pd_backend_addr.inAcC20Vol` | D ○ |
| AC C20 input current | current | A | `hs_yj751_pd_backend_addr.inAcC20Amp` | D ○ |
| AC L2-1 output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcL21Vol` | D ○ |
| AC L2-1 output current | current | A | `hs_yj751_pd_backend_addr.outAcL21Amp` | D ○ |
| AC L2-2 output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcL22Vol` | D ○ |
| AC L2-2 output current | current | A | `hs_yj751_pd_backend_addr.outAcL22Amp` | D ○ |
| AC TT output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcTtVol` | D ○ |
| AC TT output current | current | A | `hs_yj751_pd_backend_addr.outAcTtAmp` | D ○ |
| AC L14 output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAcL14Vol` | D ○ |
| AC L14 output current | current | A | `hs_yj751_pd_backend_addr.outAcL14Amp` | D ○ |
| AC POWER IN/OUT output voltage | voltage | V | `hs_yj751_pd_backend_addr.outAc5p8Vol` | D ○ |
| AC POWER IN/OUT output current | current | A | `hs_yj751_pd_backend_addr.outAc5p8Amp` | D ○ |
| AC L1-2 output current | current | A | `hs_yj751_pd_backend_addr.outAcL12Amp` | D ○ |
| AC L1-1 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL11Pf` | D ○ |
| AC L1-2 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL12Pf` | D ○ |
| AC L2-1 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL21Pf` | D ○ |
| AC L2-2 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL22Pf` | D ○ |
| AC TT output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcTtPf` | D ○ |
| AC L14 output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcL14Pf` | D ○ |
| AC POWER IN/OUT output frequency | frequency | Hz | `hs_yj751_pd_backend_addr.outAcP58Pf` | D ○ |

## Binary sensors

| Entity | Device class | Quota key | Flags |
|---|---|---|---|
| 4G enabled | connectivity | `hs_yj751_pd_appshow_addr.wireless4gOn` | D |
| 4G connected | connectivity | `hs_yj751_pd_appshow_addr.wireless4gCon` | D ○ |
| AC Always-On | — | `hs_yj751_pd_app_set_info_addr.acOftenOpenFlg` | D |
| Battery auto-heating | heat | `hs_yj751_pd_app_set_info_addr.bmsModeSet` | D |

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
| work_mode | default, self_powered, scheduled, tou | _derived_ |  |

---

_Entity totals: 81 — 62 sensor, 4 binary_sensor, 6 switch, 8 number, 1 select._
