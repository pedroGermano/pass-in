import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 flex items-center gap-3 border w-72 border-white/10  rounded-lg ">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 p-0 text-sm bg-transparent border-0 outline-none"
            type="text"
            placeholder="Buscar participante..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                className="rounded size-4 bg-black/20 border-white/10"
                type="checkbox"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data do inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <input
                    className="rounded size-4 bg-black/20 border-white/10"
                    type="checkbox"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">12234</td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Pedro Germano
                    </span>
                    <span>pedrogermano232@gmail.com</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">7 dias atrás</td>
                <td className="px-4 py-3 text-sm">3 dias atrás</td>
                <td className="px-4 py-3 text-sm">
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="px-4 py-3 text-sm" colSpan={3}>
              Monstrando 10 de 228 itens
            </td>
            <td className="px-4 py-3 text-sm text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8 ">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
