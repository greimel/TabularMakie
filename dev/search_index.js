var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TabularMakie","category":"page"},{"location":"","page":"Home","title":"Home","text":"using CairoMakie\nCairoMakie.activate!()","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DataFrames, CategoricalArrays\nusing DataAPI: refarray\n\ncs_df = let\n\tN = 100\n\tdummy_df = DataFrame(\n\t\txxx = rand(N),\n\t\tyyy = rand(N),\n\t\ts_m  = rand(5:13, N),\n\t\tg_c  = rand([\"c 1\", \"c 2\", \"c 3\"], N) |> categorical,\n\t\tg_lx = rand([\"lx 1\", \"lx 2\", \"lx 3\"], N) |> categorical,\n\t\tg_m  = rand([\"m 1\", \"m 2\", \"m 3\"], N) |> categorical\n\t\t)\n\t\n\tdummy_df[:,:s_c] = 2 .* rand(N) .+ refarray(dummy_df.g_lx)\n\tdummy_df\nend\n\nnothing # hide","category":"page"},{"location":"#TabularMakie","page":"Home","title":"TabularMakie","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This is how it looks.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TabularMakie, CairoMakie\n\nfig = lplot(Scatter, cs_df, :xxx, :yyy; color = :s_c, marker = :g_m,  markersize = :s_m, layout_y = :g_lx)\n\nsave(\"fig_001.svg\", fig) # hide\nfig","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some text in the middle. And now show it again.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: fig_001)","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TabularMakie]","category":"page"},{"location":"#TabularMakie.lookup_symbols-NTuple{4,Any}","page":"Home","title":"TabularMakie.lookup_symbols","text":"This function replaces group indicators (numbers, categories) by attributes that can be plotted (:solid, :red, etc...)\n\n\n\n\n\n","category":"method"}]
}
