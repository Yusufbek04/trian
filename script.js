function a() {
    let L_A = (+document.getElementById("l-a").value)
    let L_B = (+document.getElementById("l-b").value)
    let L_C = (+document.getElementById("l-c").value)

    let m_A = (+document.getElementById("m-a").value)
    let m_B = (+document.getElementById("m-b").value)
    let m_C = (+document.getElementById("m-c").value)

    let v_A = (+document.getElementById("v-a").value);
    let v_B = (+document.getElementById("v-b").value);
    let v_C = (+document.getElementById("v-c").value);

    let t_sam_A = (+document.getElementById("t-sam-a").value);
    let t_sam_B = (+document.getElementById("t-sam-b").value);
    let t_sam_C = (+document.getElementById("t-sam-c").value);

    let t_tex_A = (+document.getElementById("t-tex-a").value);
    let t_tex_B = (+document.getElementById("t-tex-b").value);
    let t_tex_C = (+document.getElementById("t-tex-c").value);

    let n = (+document.getElementById("n").value);

    let rapid_time = (+document.getElementById("rapid-time").value);

    let slow_time = (+document.getElementById("slow-time").value);

    let t_band_B = (+document.getElementById("t-band-b").value);

    let t_band_D = (+document.getElementById("t-band-d").value);

    if (!(L_A && L_B && L_C && m_A && m_B && m_C && v_A && v_B && v_C && t_band_B && t_band_D && t_sam_A  && t_sam_B && t_sam_C && t_tex_A && t_tex_B ** t_tex_C)) {
        alert("please all data required")
    }else{


        let t_har_per_A = t_har_per_func(L_A, v_A);
        let t_har_per_B = t_har_per_func(L_B, v_B);
        let t_har_per_C = t_har_per_func(L_C, v_C);

        let t_or_st_A = t_or_st_func(t_tex_A, t_sam_A, n, m_A);
        let t_or_st_B = t_or_st_func(t_tex_B, t_sam_B, n, m_B);
        let t_or_st_C = t_or_st_func(t_tex_C, t_sam_C, n, m_C);

        let v_uch_rapid_A = v_uch_rapid_func(L_A, t_har_per_A, t_or_st_A, m_A, rapid_time, slow_time);
        let v_uch_rapid_B = v_uch_rapid_func(L_B, t_har_per_B, t_or_st_B, m_B, rapid_time, slow_time);
        let v_uch_rapid_C = v_uch_rapid_func(L_C, t_har_per_C, t_or_st_C, m_C, rapid_time, slow_time);

        let t_tex_st_B = t_tex_st_func(t_band_B);
        let t_tex_st_D = t_tex_st_func(t_band_D);

        let t_uch_har_A = t_uch_har_func(n, L_A, v_uch_rapid_A);
        let t_uch_har_B = t_uch_har_func(n, L_B, v_uch_rapid_B);
        let t_uch_har_C = t_uch_har_func(n, L_C, v_uch_rapid_C);

        let t_tex_st_vr = t_tex_st_B + t_tex_st_D;
        let t_uch_har = t_uch_har_A + t_uch_har_B + t_uch_har_C;

        let v_marsh = (L_A + L_B + L_C) * n / (t_uch_har + t_tex_st_vr + 10 / 60);

        document.getElementById("speed_train").innerText = v_marsh;
        document.getElementById("stop").innerText = t_tex_st_vr;
        document.getElementById("going_at_a").innerText = t_uch_har_A;
        document.getElementById("going_at_b").innerText = t_uch_har_B;
        document.getElementById("going_at_c").innerText = t_uch_har_C;
        document.getElementById("total_movement_time").innerText = t_uch_har;
        document.getElementById("v_uch_rapid_A").innerText = v_uch_rapid_A;
        document.getElementById("v_uch_rapid_B").innerText = v_uch_rapid_B;
        document.getElementById("v_uch_rapid_C").innerText = v_uch_rapid_C;

        document.getElementById("res").className = "open-res";
        document.getElementById("input").className = "hide";

        function t_tex_st_func(t_band) {
            return t_band / 60;
        }

        function t_har_per_func(L, v) {
            return (60 * L) / v;
        }

        function t_or_st_func(t_amal, t_sam, n, m) {
            return 0.5 * (t_amal + t_sam) * (n / m - 1);
        }

        function v_uch_rapid_func(L, t_har_per, t_or_st, m, t_tez, t_sek) {
            return (L * 60) / (t_har_per + t_or_st + m * (t_sek + t_tez));
        }

        function t_uch_har_func(n, L, v_uch) {
            return (n * L) / v_uch;
        }
    }
}

function closeRes(){
    document.getElementById("res").className = "close-res";
    document.getElementById("input").className = "open";
}